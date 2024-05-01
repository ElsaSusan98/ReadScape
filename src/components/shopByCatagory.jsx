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
        <Row>
          {categories.map((category) => (
            <Col key={category.id} lg={3} md={4} sm={6} xs={6}>
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
        <div className="text-center mt-5 catagory-div">
          <Button className="shop-button" href="/search">VIEW MORE</Button>
        </div>
      </Container>
    );
  };

export default ShopByCategory;
