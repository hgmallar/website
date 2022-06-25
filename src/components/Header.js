import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar expand="md" bg="light" className="p-0">
      <Nav.Link href="/" className="pb-0">
        <Navbar.Brand className="px-4 py-3 mb-0 ml-0">
          Hilary Mallar
        </Navbar.Brand>
      </Nav.Link>
  </Navbar>
);

export default Header;
