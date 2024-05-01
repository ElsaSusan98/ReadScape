import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card ,Spinner} from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CategoryPage = () => {
  const { catagorylist, handleBookClick: handleBookClickSearch } = useContext(BookContext);
  const navigate = useNavigate();

  const handleBookClickCategory = (book) => {
    handleBookClickSearch(book); // Passing the book to the handleBookClick function from the search page
    navigate('/details');
    console.log(book,"item");
  };

  return (
    <>
      <Header />
      <div className="inner-section d-flex align-items-center  mb-4">
        <Container>
          <h1 className="text-white font-weight-bold">Category</h1>
        </Container>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {catagorylist &&
            catagorylist.map((item, index) => (
              <Col key={index} className="mb-4 catagory_list_column">
                <Card className="h-100" onClick={() => handleBookClickCategory(item)} >
                  <Card.Img
                    variant="top"
                    src={item.volumeInfo.imageLinks?.thumbnail}
                    alt={item.volumeInfo.title}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item.volumeInfo.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CategoryPage;
