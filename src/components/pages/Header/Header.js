import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand to="/home">RAIKA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Link style={{ textDecoration: 'none', margin:"5px" }} to="/home">Home</Link>
        <Link style={{ textDecoration: 'none', margin:"5px" }} to="/items">Items</Link>
          <Link style={{ textDecoration: 'none', margin:"5px" }} to="/dropoff">Drop-Off</Link>
          <Link style={{ textDecoration: 'none', margin:"5px" }} to="/dinning">Dinning</Link>
          {user?.email?
          <Link style={{ textDecoration: 'none', margin:"5px" }} to="/addservice">Add Service</Link> : null
          }
          {user?.email ? 
          <Button onClick={logOut} variant="light">Logout</Button> :
            <Link style={{ textDecoration: 'none', margin:"5px" }} to="/login">Login</Link>
            }
          <Navbar.Text>
            Signed in as: <Link to="/login"> {user?.displayName}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
