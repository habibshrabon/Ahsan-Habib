import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import me from "../../../images/me.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="background" collapseOnSelect expand="lg ">
      <Container>
        <Navbar.Brand as={Link} className="fw-bold fs-2 text-white" to="/">
          AH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/project">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
