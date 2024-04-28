import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../ProductContext';
import Header from '../components/Header';
import drama from '../assets/images/drama.jpeg'
import novel from '../assets/images/novel.jpeg'
import series from '../assets/images/series.jpeg'
import romance from '../assets/images/romantic.jpeg'
import book from '../assets/images/background.png'
import type from '../assets/images/type.jpeg'
import '../assets/styles/style.css';
import Footer from '../components/Footer';
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { updateSelectedProduct } = useProductContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gutendex.com/books');
        setBooks(response.data.results.slice(0, 6)); // Slice the array to get the first 10 books
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyDVWXR1mWrYxS7Th4nZElV599GnDPjI5MI`
        );
        if (response.data && response.data.categoryStats && response.data.categoryStats.mostPopular) {
          setCategories(response.data.categoryStats.mostPopular);
        }
      } catch (error) {
        console.error('There was a problem fetching the categories: ', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())

  );
  const handleNavigation = (product) => {
    console.log(product)
    navigate('/details');
    updateSelectedProduct(product)
  }

  if (loading) {
    return (
      <div>
        <h1>Loading.........</h1>
      </div>
    )
  }
  return (
    <div>
      <Header />

      <div className="bg-image d-flex align-items-center justify-content-start">
        <div className="text-white banner-content">
          <h1>Grab your next <br></br>favorite book</h1>
          <p className="text-white">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers</p>

          <button className="shop-button">DISCOVER YOUR NEXT BOOK</button>
        </div>
      </div>

    
      <section className="shop-by-category">
        <div className="container">
          <h2 className="section-heading text-center py-5">Shop by Category</h2>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={drama} alt="Category 1" className="img-fluid" />
                <h3>Category 1</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 2" className="img-fluid" />
                <h3>Category 2</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={novel} alt="Category 3" className="img-fluid" />
                <h3>Category 3</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={series} alt="Category 4" className="img-fluid" />
                <h3>Category 4</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 5" className="img-fluid" />
                <h3>Category 5</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 5" className="img-fluid" />
                <h3>Category 5</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="book-content">
                <h2>Writing books makes the
                  world go round</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris a nisi varius, a fermentum velit tincidunt.</p>
                <button className="shop-button">DISCOVER YOUR NEXT BOOK</button>
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
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={drama} alt="Category 1" className="img-fluid" />
                <h3>Category 1</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 2" className="img-fluid" />
                <h3>Category 2</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={novel} alt="Category 3" className="img-fluid" />
                <h3>Category 3</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={series} alt="Category 4" className="img-fluid" />
                <h3>Category 4</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 5" className="img-fluid" />
                <h3>Category 5</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="category-item text-center">
                <img src={romance} alt="Category 5" className="img-fluid" />
                <h3>Category 5</h3>
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
