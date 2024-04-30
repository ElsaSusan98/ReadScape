import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/CatagorySidebar';
import BooksList from '../components/BooksList';
import { useNavigate } from 'react-router-dom';
import BookDetailsPage from './bookDetails';
import { fetchBooks } from '../googleBookservice';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedBookId, setSelectedBookId] = useState(null);
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
    setSelectedBookId(book);
    navigate('/details');
  };
 

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
            <div className="book-list row justify-content-center">
              <input
                type="text"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </section>
        <Row>
          <Sidebar category={category} setCategory={handleCategoryClick} />
          {selectedBookId ? (
            <BookDetailsPage bookId={selectedBookId} />
          ) : (
            <BooksList books={books} handleBookClick={handleBookClick} />
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
