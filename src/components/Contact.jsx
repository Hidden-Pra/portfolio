import { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    success: false,
    error: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    phone_num: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.user_email ||
      !formData.phone_num ||
      !formData.message
    ) {
      setStatus({
        success: false,
        error: true,
        message: "All fields are required!",
      });
      return;
    }

    if (!validateEmail(formData.user_email)) {
      setStatus({
        success: false,
        error: true,
        message: "Please enter a valid email address!",
      });
      return;
    }

    emailjs
      .sendForm("service_z6cdxbf", "template_m1an3kj", form.current, {
        publicKey: "oU6KNRaFnRdyG2SCF",
      })
      .then(
        () => {
          setStatus({
            success: true,
            error: false,
            message: "Message sent successfully!",
          });
          setFormData({
            first_name: "",
            last_name: "",
            user_email: "",
            phone_num: "",
            message: "",
          });
        },
        (error) => {
          setStatus({
            success: false,
            error: true,
            message: `Failed to send message: ${error.text}`,
          });
        }
      );
  };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            {status.message && (
              <Alert variant={status.success ? "success" : "danger"}>
                {status.message}
              </Alert>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    name='user_email'
                    placeholder='Email Address'
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    name='phone_num'
                    placeholder='Phone No.'
                    value={formData.phone_num}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    rows={4}
                    name='message'
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type='submit'>
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
