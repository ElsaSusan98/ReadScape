import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import book from '../assets/images/background.png'
import type from '../assets/images/type.jpeg'
import '../assets/styles/style.css';
import Footer from '../components/Footer';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import Newarrivals from '../components/Newarrivals';
import ShopByCategory from '../components/shopByCatagory';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleCategoryClick } = useContext(BookContext);

  const handleCategoryhomeClick = async (catName) => {
    try {
      setLoading(true);
      await handleCategoryClick(catName);
      navigate(`/category/${catName}`);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
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
    <div>
      <Header />

      <div className="bg-image d-flex align-items-center justify-content-start">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="text-white banner-content">
              <h1>Grab your next <br />favorite book</h1>
              <p className="text-white">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers</p>
              <Button className="shop-button" as={Link} to="/search">DISCOVER YOUR NEXT BOOK</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      <ShopByCategory handleCategoryhomeClick={handleCategoryhomeClick} />
      <section className="book-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="book-content">
              <h2>Writing books makes the world go round</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                convallis mauris a nisi varius, a fermentum velit tincidunt.
              </p>
              <div className="text-md-start text-center mt-md-0 mb-3">
                <Button className="shop-button" as={Link} to="/search">
                  DISCOVER YOUR NEXT BOOK
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img src={type} alt="Book" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="newrelease-section">
      <div className="background-overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="book-content">
              <h3>NEW RELEASE</h3>
              <h2>Me & My Dad</h2>
              <p>
                Morbi proin condimentum litora duis lectus vivamus parturient
                torquent. Phasellus fames lectus molestie integer congue nulla
                id ipsum vestibulum mollis fames neque dictum. Ex vivamus
                vehicula natoque porta ipsum dis. Interdum viverra semper dolor
                dignissim urna habitasse orci. Elementum ullamcorper libero
                magna montes ut orci suspendisse magnis nam id ligula.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src={book} alt="Book" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    <Newarrivals/>
      <Footer />
    </div>
  );
};

export default HomePage;
