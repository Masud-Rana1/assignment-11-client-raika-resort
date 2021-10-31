import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Pickup.css";
const Pickup = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Pickup & Drop off services</h1>
      <Container>
      <Row md={2} xs={1}>
        <Col >
          <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/wycKGqN/DropOff.png"
            />
          </Card>
        </Col>
        <Col className="mt-5 text-center">
          <h3>Car/Micro/Cng</h3>
          <p>
            Set the tone for fabulous vacations before you set foot in Cox's
            bazar by calling us for your transportation & find the pricing. We
            will be in touch as soon as possible to follow up your request.
            Vacations are supposed to be fun, so let us do all the work!
            Contact: +88014400000
          </p>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Pickup;
