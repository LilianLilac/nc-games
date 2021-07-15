import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import UserProfile from "./UserProfile";

const NavHeader = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="/home">NC Games</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/reviews/category/strategy">
              Strategy
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/hidden-roles">
              Hidden-roles
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/dexterity">
              Dexterity
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/push-your-luck">
              Push-your-luck
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/roll-and-write">
              Roll-and-write
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/deck-building">
              Deck-building
            </NavDropdown.Item>
            <NavDropdown.Item href="/reviews/category/engine-building">
              Engine-building
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/categories">
              See All Categories
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Navbar.Text>Signed in as:</Navbar.Text>
          <Nav.Link eventKey="disabled">
            <UserProfile />
          </Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavHeader;
