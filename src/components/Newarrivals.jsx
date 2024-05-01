import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';

const Newarrivals = () => {
  return (
    <section className="shop-by-category">
      <Container>
        <h4 className="section-heading py-5">New Arrivals</h4>
        <Row xs={1} sm={2} md={4}>
          <Col>
            <div className="category-item text-center">
              <img src={book1} alt="Category 1" className="img-fluid" />
            </div>
          </Col>
          <Col>
            <div className="category-item text-center">
              <img src={book2} alt="Category 2" className="img-fluid" />
            </div>
          </Col>
          <Col>
            <div className="category-item text-center">
              <img src={book3} alt="Category 3" className="img-fluid" />
            </div>
          </Col>
          <Col>
            <div className="category-item text-center">
              <img src={book4} alt="Category 4" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newarrivals;
