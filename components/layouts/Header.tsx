import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'


export default function header() {
    return (
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container className="navbar">
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
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <Nav.Link><Link href="/">Home</Link></Nav.Link>
                  <Nav.Link><Link href="/about">About</Link></Nav.Link>
                  <Nav.Link><Link href="/service">Service</Link></Nav.Link>
                  <Nav.Link><Link href="/portfolio">Portfolio</Link></Nav.Link>
                  <NavDropdown title="Pages" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link href="/element">Element</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link href="/portfolio/detail">Portfolio details</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Blog" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link href="/blog">Blog</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link href="/blog/detail">Blog Details</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      
    );
}
