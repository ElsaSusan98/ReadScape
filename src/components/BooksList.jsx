import React from 'react';
import { Form, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';


const BooksList = ({ books, handleBookClick }) => {
    return (
        <Col md={8}>
        <Row>
          {books.map((book) => (
            <Col key={book.id} xs={12} sm={6} md={3} lg={4} className="mb-4">
             <Card onClick={() => handleBookClick(book.id)} style={{ height: '100%' }}>
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail &&
                <Card.Img
                  style={{ height: '270px', objectFit: 'cover' }} // Adjust the height as needed
                  variant="top"
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.volumeInfo.title}
                />
              }
                <Card.Body>
                  <Card.Title>{book.volumeInfo.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    );
  };
  export default BooksList;