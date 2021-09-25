import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container className="navbar_content">
        <Navbar.Brand>
          <img
            src="/images/logo.webp"
            width="100%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="navbar_link">
              <Link href="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="navbar_link">
              <Link href="/about">About</Link>
            </Nav.Link>
            <Nav.Link className="navbar_link">
              <Link href="/service">Service</Link>
            </Nav.Link>
            <Nav.Link className="navbar_link">
              <Link href="/portfolio">Portfolio</Link>
            </Nav.Link>
            <NavDropdown className="navbar_link nav_item" title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item >
                <Link href="/element">Element</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link href="/portfolio/detail">Portfolio</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navbar_link nav_item" title="Blog" id="collasible-nav-dropdown">
              <NavDropdown.Item >
                <Link href="/blog">Blog</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/blog/detail">Blog Details</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navbar_link navbar_link_last">
              <Link href="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
