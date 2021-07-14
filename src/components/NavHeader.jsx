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
          <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/reviews/strategy">
              Strategy
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/hidden-roles">
              Hidden-roles
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/dexterity">
              Dexterity
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/push-your-luck">
              Push-your-luck
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/roll-and-write">
              Roll-and-write
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/deck-building">
              Deck-building
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/engine-building">
              Engine-building
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/categories">
              See All Categories
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavHeader;
