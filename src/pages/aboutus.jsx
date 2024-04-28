import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import innerbanner from "../assets/images/banner_iner.jpeg"
import ladies from "../assets/images/ladies.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faPenNib, faComment } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg"
import testimonial3 from "../assets/images/testimonial3.jpeg"

const About = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
return(
<>
<Header/>
      <div className="inner-section d-flex align-items-center">
        <Container>
          <h1 class="text-white font-weight-bold">About Us</h1>
        </Container>
      </div>
      <section>
        <h2 class="section-heading text-center py-5">WELCOME TO READ SCAPE</h2>
        <p className="text-center px-5">Our mission is to bring the passion and love for reading books back. whether it's a regular paper book, or an online edition, we want our readers to know that we appreciate quality and artful storytelling. Join our community and enjoy multiple genres, modern and classic authors, reviews, critics and more!</p>
      </section>

      <section className="about-our-section">
        <div id="aboutUsSection" className="about-us-area">
          <Container>
            <Row className="align-items-center flex-wrap-reverse">
            <Col md={6}>
                <div className="about-us-img">
                  <img alt="book-reading" src={ladies} className="img-fluid" />
                </div>
              </Col>
              <Col md={6}>
                <div className="about-us-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                </div>
              </Col>
             
            </Row>
          </Container>
        </div>
      </section>

    <div className="features-section">
    <Container>
      <Row>
        <Col md={4}>
          <div className="feature text-center py-4">
            <FontAwesomeIcon icon={faGift} size="4x" />
            <h4>Make the Best Choice</h4>
            <p>Porttitor eleifend facilisi euismod litora etiam consectetur. Vivamus platea quisque mauris si blandit diam id a primis himenaeos. Natoque vulputate duis nec </p>
           
          </div>
        </Col>
        <Col md={4}>
          <div className="feature text-center py-4">
            <FontAwesomeIcon icon={faPenNib} size="4x" />
            <h4>Find Your Favorite Authors</h4>
            <p>Porttitor eleifend facilisi euismod litora etiam consectetur. Vivamus platea quisque mauris si blandit diam id a primis himenaeos. Natoque vulputate duis nec </p>
            
          </div>
        </Col>
        <Col md={4}>
          <div className="feature text-center py-4">
            <FontAwesomeIcon icon={faComment} size="4x" />
            <h4>Read Reader’s Reviews</h4>
            <p>Porttitor eleifend facilisi euismod litora etiam consectetur. Vivamus platea quisque mauris si blandit diam id a primis himenaeos. Natoque vulputate duis nec </p>
           
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  <section className="review-section">
      <Container>
        <h2 className="text-center mb-4">Customer Reviews</h2>
        <Row>
          <Col>
            <Carousel
              nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            >
              <Carousel.Item>
                <div className="review-item text-center px-3">
                  <img src={testimonial1} alt="John Doe" className="img-fluid rounded-circle mb-3" />
                  <h4>John Doe</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in neque eget velit ornare pretium. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="review-item text-center px-3">
                  <img src={testimonial2} alt="Jane Smith" className="img-fluid rounded-circle mb-3" />
                  <h4>Jane Smith</h4>
                  <p>Fusce quis lectus eu ex rutrum scelerisque. Sed eget ante sed risus condimentum placerat. Vivamus vestibulum risus vel nisi eleifend, in varius neque luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="review-item text-center px-3">
                  <img src={testimonial3} alt="Mike Johnson" className="img-fluid rounded-circle mb-3" />
                  <h4>Debora Johnson</h4>
                  <p>Pellentesque rhoncus, libero id tincidunt lobortis, est magna facilisis purus, eget ultricies arcu odio a libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
<Footer/>
</>


)};

export default About;