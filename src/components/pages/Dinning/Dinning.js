import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Dinning = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row xs={1} md={3}>
          <Col className="mt-5">
            <h3>BreakFast Club</h3>
            <p>
              Pancakes, honey, breads, eggs, fresh fruit, coconut water. Fill in
              the easy breakfast card the night before, and let us know in the
              morning whenever you want to be served.
            </p>
            <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/TLh6d8Z/Background-2.png"
            />
          </Card>
          </Col>
          <Col>
            <h1>Eat the Time</h1>
            <p>
              Fresh juice bar, BBQs, great lagoon views, and evening outdoor
              films at Eat the Time. A great place not only for dining, but
              relaxing and soaking up the Cox’s Bazaar style of life.
            </p>
            <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/j5YJLtf/Background-1.png"
            />
          </Card>
          </Col>
          <Col className="mt-5">
            <h3>Organic Food</h3>
            <p>
              Fresh, healthy, wholesome foods, much of which are grown on
              Mermaid land, almost all of which are sourced within a
              10-kilometre radius as part of our commitment to help local
              communities.
            </p>
            <Card>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/fDGPYbf/Background.png"
            />
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dinning;
