import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo-1.png";

const Header = () => {
  return (
    <Navbar className="background" collapseOnSelect expand="lg ">
      <Container>
        <Navbar.Brand as={Link} className="fw-bold fs-2 text-white" to="/">
          <img style={{ height: "70px" }} src={logo} alt="" />{" "}
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
            <Nav.Link className="text-white" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fff" }}
              target="_blank"
              href="https://drive.google.com/file/d/1cQEouWGF49vLawzIn0qkeI1RvM2jQ7Z0/view"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
