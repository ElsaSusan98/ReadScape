import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-white bg-footer">
      <div className="footer-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img src={logo} height={120} width={120} ></img>
            <h5 className='text-white' >READ SCAPE</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>KNOW MORE</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li>OUR STORY</li>
              <li>BOOK LIST</li>
              <li>CATAGORY</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>CONTACT US</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
            <div class="social-icon">
              <ul>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
