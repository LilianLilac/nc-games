import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavHeader = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/reviews">REVIEWS</Nav.Link>
          <Nav.Link href="/categories">CATEGORIES</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavHeader;
