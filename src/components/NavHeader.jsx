import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

const NavHeader = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="/home">NC Games</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/reviews">REVIEWS</Nav.Link>
          <Nav.Link href="/categories">CATEGORIES</Nav.Link>
          <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/7.1">Strategy</NavDropdown.Item>
            <NavDropdown.Item href="#action/7.2">Hidden-roles</NavDropdown.Item>
            <NavDropdown.Item href="#action/7.3">Dexterity</NavDropdown.Item>
            <NavDropdown.Item href="#action/7.4">
              Push-your-luck
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/7.5">
              Roll-and-write
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/7.6">
              Deck-building
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/7.7">
              Engine-building
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavHeader;
