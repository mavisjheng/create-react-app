import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

const Header = ({ theme, brand, links }) => (
  <Navbar fixed="top" bg={theme} variant={theme}>
    <Navbar.Brand>{brand}</Navbar.Brand>
    {links.map((link) => (
      <Link to={link} key={`router-link-${link}`} className="router-links">
        {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
      </Link>
    ))}
  </Navbar>
);

export default Header;
