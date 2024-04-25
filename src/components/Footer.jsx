import React from 'react';
import logo from "../logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white bg-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
        <img src={logo} height={120} width={120}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
