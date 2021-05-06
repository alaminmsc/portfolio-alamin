
import React from 'react';
import { Button, Nav, Navbar, NavDropdown,Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { Facebook, GitHub, HomeRounded, LinkedCamera, LinkedIn, Telegram, Twitter } from '@material-ui/icons';

const Header = () => {
    return (
        <div >
            
            <Navbar bg="light" expand="lg" sticky="top" className={'header'}>
                {/* Home Link */}
            <Nav.Link href="/">
                <Navbar.Brand className="header_home">
                    <HomeRounded></HomeRounded>
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
            <Nav.Link href="/resume">
                <Navbar.Brand className="header_home">
                   Resume
                </Navbar.Brand>
            </Nav.Link>
            <Nav.Link href="/resume">
                <Navbar.Brand className="header_home">
                   Portfolio
                </Navbar.Brand>
            </Nav.Link>
            <Nav.Link href="/resume">
                <Navbar.Brand className="header_home">
                   Blog
                </Navbar.Brand>
            </Nav.Link>
            <Nav.Link href="/resume">
                <Navbar.Brand className="header_home">
                   Contact
                </Navbar.Brand>
            </Nav.Link>
           <div style={{paddingLeft:'90px',textAlign:'right'}}>
            <Nav.Link href="/resume">
                <Navbar.Brand className="header_home">
                   <GitHub></GitHub>
                </Navbar.Brand>
                <Navbar.Brand className="header_home">
                  <LinkedIn></LinkedIn>
                </Navbar.Brand>
                <Navbar.Brand className="header_home">
                  <Twitter></Twitter>
                </Navbar.Brand>
                <Navbar.Brand className="header_home">
                   <button className="downloadBTN">Hire Me<Telegram></Telegram></button>
                   
                </Navbar.Brand>
            </Nav.Link>
            </div>
            </Navbar.Collapse>
            
</Navbar>
            
           
            
        </div>
    );
};

export default Header;