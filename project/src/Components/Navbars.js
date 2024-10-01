import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../CSS/NavBars.css";
import Logo from "../Assets/cricket-ball-png-28881.png";

function Navbars() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary nav-bar">
        <Container className="nav-container ">
          <Navbar.Brand className="logo-container">
            <Link to={"/"} className="link">
              <img src={Logo} className="logo" alt="logo" />
              <h1>Cric-Score</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link className="links">Home</Nav.Link>
              <Nav.Link className="links">Matches</Nav.Link>
              <Nav.Link className="links">About</Nav.Link>
              <Nav.Link className="links"> Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
