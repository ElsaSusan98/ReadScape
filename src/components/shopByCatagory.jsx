import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import drama from '../assets/images/drama.jpeg'
import novel from '../assets/images/novel.jpeg'
import series from '../assets/images/series.jpeg'
import romance from '../assets/images/romantic.jpeg'
import { Link } from 'react-router-dom';
const categories = [
    { id: 1, name: 'Drama', image: drama },
    { id: 2, name: 'Romance', image: romance },
    { id: 3, name: 'Novel', image: novel },
    { id: 4, name: 'Recipes', image: series },
  ];

  const ShopByCategory = ({ handleCategoryhomeClick }) => {
    return (
        <Container>
        <h2 className="section-heading text-center py-5">Shop by Category</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {categories.map((category) => (
            <Col key={category.id} className="mb-4">
              <div
                className="category-item-home text-center"
                onClick={() => handleCategoryhomeClick(category.name)}
              >
                <img src={category.image} alt={category.name} className="img-fluid" />
                <div className="category-name-home">{category.name}</div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <Button className="shop-button" as={Link} to="/search">VIEW MORE</Button>
          </Col>
        </Row>
      </Container>
    );
  };

export default ShopByCategory;
