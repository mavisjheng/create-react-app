import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ theme, brand, links }) => (
  <Navbar fixed="top" bg={theme} variant={theme}>
    <Navbar.Brand>{brand}</Navbar.Brand>
    <Nav className="mr-auto">
      {links.map((link) => (
        <Nav.Link href={link} key={`nav-link-${link}`}>
          {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
