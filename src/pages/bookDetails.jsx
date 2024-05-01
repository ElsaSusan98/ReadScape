import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
  const { bookDetails, handleBookClick } = useContext(BookContext);
  const navigate = useNavigate();
console.log(bookDetails,"bookDetails ccon");
  // Reset bookDetails when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     handleBookClick(null);
  //   };
  // }, [handleBookClick]);

  return (
    <>
      <Header />
      <div className="inner-section d-flex align-items-center">
        <Container>
          <h1 className="text-white font-weight-bold">Book Details</h1>
        </Container>
      </div>
      <Container className="bookdetails-section mt-4 mb-4">
        {bookDetails && (
          <Row>
            <Col xs={12} md={4} lg={4}>
            <Image
                  src={bookDetails?.volumeInfo?.imageLinks?.thumbnail}
                  
                  fluid
                  className="book-detail-image"
                />
          
            </Col>
            <Col xs={12} md={8} lg={8} className="bookdetails_list">
              <h3>{bookDetails?.volumeInfo?.title}</h3>
              <p>{bookDetails?.volumeInfo?.description}</p>
              <p>
                <span>Author:</span> {bookDetails?.volumeInfo?.authors}
              </p>
              <p>
                <span>Category: </span> {bookDetails?.volumeInfo?.categories}
              </p>
              <p>
                <span>Publishing Date:</span> {bookDetails?.volumeInfo?.publishedDate}
              </p>
              <p>
                <span>Rating :</span>
                {bookDetails?.volumeInfo?.averageRating}
              </p>
              <Button href={bookDetails?.volumeInfo?.infoLink} target="_blank" rel="noopener noreferrer" className="purchase_link">
                PURCHASE LINK
              </Button>
              <span className='goback-button'>
              <Link to="/search" className="goback_link">
                GO BACK
              </Link>
              </span>
              
            </Col>
          </Row>
        )}
      </Container>
      <Footer/>
    </>
  );
};

export default BookDetailsPage;
