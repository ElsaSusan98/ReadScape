import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../ProductContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetchBooks from '../googleBookservice';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const categories = [
    { value: '', label: 'All' },
    { value: 'fiction', label: 'Fiction' },
    { value: 'history', label: 'History' },
    { value: 'science', label: 'Science' },
    { value: 'technology', label: 'Technology' }
  ];
  
const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();
  const { updateSelectedProduct } = useProductContext();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks(searchTerm, category);
      setBooks(data || []);
    };

    getBooks();
  }, [searchTerm, category]);

  const handleNavigation = (book) => {
    navigate('/details');
    updateSelectedProduct(book);
  };

  return (
    <>
    <Header/>
      <div className="inner-section d-flex align-items-center">
        <Container>
          <h1 className="text-white font-weight-bold">Search</h1>
        </Container>
      </div>
      <Container>
        <section className="book-section">
          <div className="container">
            <h2 className="text-center mb-4">Discover Your Next Book</h2>
            <div className="book-list row justify-content-center">
              <Form.Group as={Col} md={8} className="text-center">
                <Form.Label>Search Term</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter search term"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form.Group>
            </div>
          </div>
        </section>
        <Row>
          <Col md={4}>
            <h2>Categories</h2>
            <ListGroup>
              {categories.map((cat, index) => (
                <ListGroup.Item key={index} active={category === cat.value} onClick={() => setCategory(cat.value)}>
                  {cat.label}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={8}>
            <h2>Books</h2>
            <ListGroup>
              {books.map((book) => (
                <ListGroup.Item key={book.id} onClick={() => handleNavigation(book)}>
                  {book.volumeInfo.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
