import React from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import {
  Facebook,
  GitHub,
  HomeRounded,
  LinkedCamera,
  LinkedIn,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ justifyContent: "space-between" }}>
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        className={"header"}
        style={{ padding: "0px" }}
      >
        {/* Home Link */}
        <Nav.Link href="/" style={{ padding: "0px" }}>
          <Navbar.Brand className="header_home">
            <HomeRounded></HomeRounded>
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav.Link href="/resume">
            <Navbar.Brand>Resume</Navbar.Brand>
          </Nav.Link>
          <Nav.Link href="/portfolio">
            <Navbar.Brand>Portfolio</Navbar.Brand>
          </Nav.Link>
          <Nav.Link href="/resume">
            <Navbar.Brand>Blog</Navbar.Brand>
          </Nav.Link>
          <Nav.Link href="/resume">
            <Navbar.Brand>Contact</Navbar.Brand>
          </Nav.Link>
          <div className="socialLink" style={{textAlign:'right'}}>
            <Nav.Link>
              <Navbar.Brand>
                <GitHub></GitHub>
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link>
              <Navbar.Brand>
                <LinkedIn></LinkedIn>
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link>
              <Navbar.Brand>
                <Twitter></Twitter>
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link className="hireMe">
              <Navbar.Brand>
                <button>Hire Me <Telegram></Telegram> </button>
              </Navbar.Brand>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
