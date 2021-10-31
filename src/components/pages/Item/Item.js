import React, { useEffect } from "react";
import { Button, Card, Col} from "react-bootstrap";
import { useHistory } from "react-router";
const Item = ({ item }) => {
    const {_id, name, price, description,img} = item;
    const history = useHistory();
    const handleDetails = (_id) =>{ 
     const url =  `details/${_id}`;
     history.push(url);
     
    
    }

    

  return (
    <div>
      
        
          <Col className="m-3 h-100">
            <Card className="w-100 h-100">
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
                    
                
              </Card.Body>
              <Button onClick={()=>{handleDetails(_id)}}>Details</Button>
            </Card>
          </Col>
        
      
    </div>
  );
};

export default Item;
