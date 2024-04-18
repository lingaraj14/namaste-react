import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <>
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact us</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Layout;
