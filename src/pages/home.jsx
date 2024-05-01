import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import book from '../assets/images/background.png'
import type from '../assets/images/type.jpeg'
import '../assets/styles/style.css';
import Footer from '../components/Footer';
import ShopByCategory from '../components/shopByCatagory';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import drama from '../assets/images/drama.jpeg'
import novel from '../assets/images/novel.jpeg'
import series from '../assets/images/series.jpeg'
import romance from '../assets/images/romantic.jpeg'
import { CatagoryfetchBooks } from '../googleBookservice';
import { BookContext } from '../contexts/BookContext';
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';

const categories = [
  { id: 1, name: 'Drama', image: drama },
  { id: 2, name: 'Romance', image: romance },
  { id: 3, name: 'Novel', image: novel },
  { id: 4, name: 'Recipes', image: series },
];

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
        <div className="text-white banner-content">
          <h1>Grab your next <br></br>favorite book</h1>
          <p className="text-white">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers</p>

          <Button className="shop-button" href="/search">DISCOVER YOUR NEXT BOOK</Button>
        </div>
      </div>


      <ShopByCategory handleCategoryhomeClick={handleCategoryhomeClick} />
      <section className="book-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="book-content">
                <h2>Writing books makes the
                  world go round</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris a nisi varius, a fermentum velit tincidunt.</p>
                <Button className="shop-button" href="/search">DISCOVER YOUR NEXT BOOK</Button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={type} alt="Book" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="newrelease-section">
        <div class="background-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="book-content">
                <h3>NEW RELEASE</h3>
                <h2>Me & My Dad</h2>
                <p>Morbi proin condimentum litora duis lectus vivamus parturient torquent. Phasellus fames lectus molestie integer congue nulla id ipsum vestibulum mollis fames neque dictum. Ex vivamus vehicula natoque porta ipsum dis. Interdum viverra semper dolor dignissim urna habitasse orci. Elementum ullamcorper libero magna montes ut orci suspendisse magnis nam id ligula.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={book} alt="Book" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="shop-by-category">
        <div className="container">
          <h4 className="section-heading py-5">New Arrivals</h4>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="category-item text-center">
                <img src={book1} alt="Category 1" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="category-item text-center">
                <img src={book2} alt="Category 2" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="category-item text-center">
                <img src={book3} alt="Category 3" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="category-item text-center">
                <img src={book4} alt="Category 4" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HomePage;
