import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
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
          <Nav className="me-auto">none</Nav>
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
            <NavDropdown
              className="navbar_link"
              title="Pages"
              id="collasible-nav-dropdown"
            >
              <Nav.Item>
                <NavDropdown.Item>
                  <Link href="/element">Element</Link>
                </NavDropdown.Item>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown.Item>
                  <Link href="/portfolio/detail">
                    Portfolio Details
                  </Link>
                </NavDropdown.Item>
              </Nav.Item>
            </NavDropdown>
            <NavDropdown
              className="navbar_link"
              title="Blog"
              id="collasible-nav-dropdown"
            >
              <Nav.Item>
                <NavDropdown.Item>
                  <Link href="/blog">Blog</Link>
                </NavDropdown.Item>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown.Item>
                  <Link href="/blog/detail">
                    Blog Details
                  </Link>
                </NavDropdown.Item>
              </Nav.Item>
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
