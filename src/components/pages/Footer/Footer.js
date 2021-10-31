import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-white mt-5">
      <Container fluid="md">
        <Row>
          <Col className="mt-5">
            <h2>Raika Eco Resort</h2>
            <p>Pechardwip, Marine Drive Road, Cox's Bazar-4730</p>
            <p>Reservation Hotline: +880184444444/+8801888888888</p>
            <p>E-mail: RaikaEcoResrt@gmail.com</p>
          </Col>
          <Col className="mt-5">
            <h2>Others</h2>
            <p>Packages</p>
            <p>dinning</p>
            <p>Gallery</p>
            <p>Contact</p>
          </Col>
          <Col className="mt-5">
            <h2>Follow us</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
