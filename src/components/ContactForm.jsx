import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <section className="contactus-form">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <div className="contactus-form">
              <h4>GET IN TOUCH</h4>
              <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Name is required'),
                  email: Yup.string().email('Invalid email address').required('Email is required'),
                  subject: Yup.string().required('Subject is required'),
                  message: Yup.string().required('Message is required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        isInvalid={touched.name && errors.name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        isInvalid={touched.email && errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="subject">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                        isInvalid={touched.subject && errors.subject}
                      />
                      <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="message">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your Message"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        isInvalid={touched.message && errors.message}
                      />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button className='purchase_link' type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
