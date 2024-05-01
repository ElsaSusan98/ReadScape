import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/contactus">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li><Link to="/aboutus">OUR STORY</Link></li>
              <li><Link to="/search">BOOK LIST</Link></li>
              <li><Link to="/search">CATEGORY</Link></li>
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
                <li><Link to=""><FontAwesomeIcon icon={faTwitter} /></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faFacebook}/></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faInstagram}/></Link></li>
                <li><Link to=""><FontAwesomeIcon icon={faLinkedin} /></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
