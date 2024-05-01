import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={`footer text-white bg-footer ${window.innerWidth <= 576 ? 'text-center' : ''}`}>
      <div className="footer-overlay"></div>
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <img src={logo} height={120} width={120} alt="Read Scape"></img>
            <h5 className='text-white'>READ SCAPE</h5>
          </Col>
          <Col lg={3} md={6}>
            <h5>KNOW MORE</h5>
            <ul className="list-unstyled">
              <li><a href="/home">Home</a></li>
              <li><a href="/aboutus">About</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/contactus">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li><a href="/aboutus">OUR STORY</a></li>
              <li><a href="/search">BOOK LIST</a></li>
              <li><a href="/search">CATEGORY</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>CONTACT US</h5>
            <ul className="list-unstyled">
              <li>Email: aleyase@roehampton.ac.uk</li>
              <li>Phone: 123-456-7890</li>
            </ul>
            <div className="social-icon">
              <ul>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
