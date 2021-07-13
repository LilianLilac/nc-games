import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavHeader = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">NC Games</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/reviews">REVIEWS</Nav.Link>
          <Nav.Link href="/categories">CATEGORIES</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavHeader;
