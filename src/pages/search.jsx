import React, { useState, useEffect, useContext } from 'react';
import { Col, Container, Form, Row,Spinner } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/CatagorySidebar';
import BooksList from '../components/BooksList';
import { useNavigate } from 'react-router-dom';
import BookDetailsPage from './bookDetails';
import { fetchBooks } from '../googleBookservice';
import { BookContext } from '../contexts/BookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchPage = () => {
  const { bookDetails, handleBookClick: handleBookId } = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const getDefaultBooks = async () => {
      try {
        const defaultBooks = await fetchBooks('q=subject:javascript');
        setBooks(defaultBooks || []);
      } catch (error) {
        console.error('Error fetching default books:', error);
      }
    };
    getDefaultBooks();
  }, []);

  useEffect(() => {
    const getBooks = async () => {
      try {
        let query = '';
        if (searchTerm) {
          query += `q=${encodeURIComponent(searchTerm)}`;
        } else if (category) {
          query += category === 'All' ? `q=subject:all` : `q=subject:${encodeURIComponent(category)}`;
        }
        const data = await fetchBooks(query);
        setBooks(data || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, [searchTerm, category]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = async (cat) => {
    try {
      const query = cat === 'All' ? `q=subject:all` : `q=subject:${encodeURIComponent(cat)}`;
      const data = await fetchBooks(query);
      setBooks(data || []);
      setCategory(cat);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBookClick = (book) => {
    handleBookId(book);
    navigate('/details');
    console.log(book,"vbook");
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="inner-section d-flex align-items-center">
        <Container>
          <h1 className="text-white font-weight-bold">Search</h1>
        </Container>
      </div>
      <Container style={{ marginBottom: '20px' }}>
        <section className="book-section">
          <div className="container">
            <h2 className="text-center mb-4">Discover Your Next Book</h2>
            <div className="book-list searchbar">
            <Form.Control
                type="text"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </div>
        </section>
        <Row>
          <Sidebar category={category} setCategory={handleCategoryClick} />
       
            <BooksList books={books}  handleBookClick={handleBookClick} />
    
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
