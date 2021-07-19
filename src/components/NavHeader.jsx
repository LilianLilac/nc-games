import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import UserProfile from "./UserProfile";

const NavHeader = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" justify variant="light" expand="lg">
        <Navbar.Brand href="/home">NC Games</Navbar.Brand>
        {/* <Nav className="mr-auto"> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
            {/* <Navbar.Text>Signed in as:</Navbar.Text> */}
            <Nav.Link eventKey="disabled">
              <UserProfile />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavHeader;
