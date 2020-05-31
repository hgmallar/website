import React, {Link} from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => (
  <header>
    <Navbar expand="md" bg="light" className="p-0">
      <Link to="/" className="pb-0">
        <Navbar.Brand className="px-4 py-3 mb-0 ml-0">
          Hilary Mallar
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            to="/"
            className={
              "px-0 ml-auto " +
              (props.page === "about" ? "font-weight-bold" : "")
            }
          >
            About
            <span className="my-auto pink font-weight-bold px-2 d-none d-md-inline">
              |
            </span>
          </Link>
          <Link
            to="portfolio"
            className={
              "px-0 ml-auto " +
              (props.page === "portfolio" ? "font-weight-bold" : "")
            }
          >
            {" "}
            Portfolio
            <span className="my-auto pink font-weight-bold px-2 d-none d-md-inline">
              |
            </span>
          </Link>
          <Link
            to="contact"
            className={
              "px-0 ml-auto " +
              (props.page === "contact" ? "font-weight-bold" : "")
            }
          >
            {" "}
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;

Header.propTypes = {
  page: PropTypes.string.isRequired,
};