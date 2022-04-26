//create a header
// has a link to the homepage
// has a link to the about page
// has a link to the contact page
// has a link to the projects page

import React from "react";

//import styling from react-bootstrap
import { Navbar, Nav } from "react-bootstrap";

//header component
//go to contact page on clicking the link to the contact page

const Header = ({ active, onSelect }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            onClick={() => onSelect("home")}
            className={active === "home" ? "active" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => onSelect("contact")}
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#projects"
            onClick={() => onSelect("projects")}
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
