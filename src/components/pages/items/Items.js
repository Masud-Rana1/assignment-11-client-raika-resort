import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://eerie-dracula-96688.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });
  return (
    <div className="container">
      <h1 className="text-center m-5">Room Services</h1>
      <Row className="g-5" lg={3}>
      
      {items.map((item) => <Item key={item._id}
         item={item}></Item>
      )}
      </Row>
    </div>
  );
};

export default Items;
