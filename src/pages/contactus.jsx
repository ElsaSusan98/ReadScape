import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const Contactus = () => {

    return (
        <>
            <Header />
            <div className="inner-section d-flex align-items-center">
                <Container>
                    <h1 class="text-white font-weight-bold">Contact Us</h1>
                </Container>
            </div>

            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info-wrapper">
                                <div className="contact-info-icon">
                                    <FontAwesomeIcon icon={faLocationDot} size={"2x"} />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Our Location</h4>
                                    <p>11 Sharon close, Crawley</p>
                                    <p><a href="#">London</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-wrapper">
                                <div className="contact-info-icon">
                                    <FontAwesomeIcon icon={faMobile} size={"2x"} />

                                </div>
                                <div className="contact-info-content">
                                    <h4>Contact us Anytime</h4>
                                    <p><a href="tel:07587779275">Mobile: 07587779275</a></p>
                                    <p><a href="#">Fax: 123 456 789</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-wrapper">
                                <div className="contact-info-icon">
                                    <FontAwesomeIcon icon={faMessage} size={"2x"} />

                                </div>
                                <div className="contact-info-content">
                                    <h4>Write Some Words</h4>
                                    <p><a href="mailto:aleyase@roehampton.ac.uk">aleyase@roehampton.ac.uk</a></p>
                                    <p><a href="mailto:aleyase@roehampton.ac.uk">aleyase@roehampton.ac.uk</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              <ContactForm />

                <div className="map row">
                    <div className="col">
                        <div className="location-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.215687169981!2d-0.17097842374355887!3d51.10448057172448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f1f18b942ac5%3A0xb248948c7587c4ee!2s11%20Sharon%20Cl%2C%20Crawley%20RH10%206QD!5e0!3m2!1sen!2suk!4v1704920189517!5m2!1sen!2suk" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>


    )
};
export default Contactus;