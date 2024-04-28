import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <section className="contactus-form">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="contactus-form">
              <h4>GET IN TOUCH</h4>
              <Form>
                <Form.Group controlId="name">
                  <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group controlId="subject">
                  <Form.Control type="text" placeholder="Subject" required />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button-style">
                  SEND MESSAGE
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
