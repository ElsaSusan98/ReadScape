import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchBookDetails } from '../googleBookservice';

const BookDetailsPage = ({ books }) => {
  const [bookDetails, setBookDetails] = useState(null);
console.log("what",books);

  
  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const bookId = book.id;
        const bookDetails = await fetchBookDetails(bookId);
        setBookDetails(bookDetails);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    getBookDetails();
  }, [book]);

  const { title, imageLinks, description, saleInfo } = book.volumeInfo || {};

  return (
    <>
      <Header />
      <div className="inner-section d-flex align-items-center">
        <Container>
          <h1 className="text-white font-weight-bold">Book Details</h1>
        </Container>
      </div>
      <Container>
        {imageLinks && imageLinks.thumbnail && (
          <img src={imageLinks.thumbnail} alt={title} />
        )}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {saleInfo && saleInfo.buyLink && (
          <a href={saleInfo.buyLink}>Purchase</a>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default BookDetailsPage;

