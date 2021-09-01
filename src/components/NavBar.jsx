import React from "react";
import pagesItem from "../PagesItem";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigBar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid="xxl">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/images/mmlogo-landscape.png"
                height="40px"
                alt="MODERN MARINO"
                className="navlogo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/about-us">
                ABOUT US
              </Link>
              {pagesItem.map(({ id, title, key }) => (
                <Link key={key} to={`/${id}`} className="uppercase link">
                  {title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigBar;
