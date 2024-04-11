import React from 'react';
import logo from "../logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 bg-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
        <img src={logo} height={50} width={50}></img>
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
    <div className="text-center text-muted mt-3">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);
};

export default Footer;
