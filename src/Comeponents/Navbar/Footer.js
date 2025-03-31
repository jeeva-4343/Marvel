import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="footer-section fade-in">
            <h4>About Us</h4>
            <p>
              We are a leading company providing the best Marvel Movies.
              Our mission is to help you Fully Entertainment and Enjoy the Services.
            </p>
          </Col>
          
          {/* Quick Links */}
          <Col md={4} className="footer-section fade-in">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col md={4} className="footer-section fade-in">
            <h4>Contact Us</h4>
            <p>Email: marvel@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Street, City, Coimbatore</p>
            <div className="social-icons">
              <a href="#facebook"><FaFacebook /></a>
              <a href="#twitter"><FaTwitter /></a>
              <a href="#instagram"><FaInstagram /></a>
              <a href="#linkdein"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="footer-bottom text-center">&copy; 2025 Marvel. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

