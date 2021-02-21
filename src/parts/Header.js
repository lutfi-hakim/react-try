import React from "react";
import logo from "../logo.svg";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header(props) {
  return (
    <Navbar className="navbar-navy" expand="lg">
      <div>
        <Navbar.Brand href="/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width="154"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} href="/">
            Now Playing
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/about">
            About
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/about">
            Orang
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/about">
            More
          </Nav.Link>
        </Nav>

        <Form inline>
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "white" }} href="/">
              +
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about">
              ID
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about">
              Masuk
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/about">
              Bergabung dengan TMDB
            </Nav.Link>
          </Nav>

          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
