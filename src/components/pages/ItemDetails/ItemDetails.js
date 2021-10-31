import React, { useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

const ItemDetails = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState({});
  useEffect(() => {
    fetch("https://eerie-dracula-96688.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find((detail) => detail._id == _id);
      setSpecificDetail(matchedData);
    }
  }, [details]);
  const{name, price ,description, img} = specificDetail;
  return (
    <div>
      <Col className="m-3 h-100 ">
      <Card className="w-25 h-50 ">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h6>Description:</h6>
                  {description}
                </Card.Text>
                <p>
                    <h6>Price:</h6>
                    {price}
                    </p>
                    <Button>Place Order</Button>
                
              </Card.Body>
            </Card>
            </Col>
    </div>
  );
};

export default ItemDetails;
