import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  //console.log("cartItems:", cartItems);

  return (
    <>
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="text-white">
              <Link className="p-2" to="/">
                Home
              </Link>
              <Link className="p-2" to="/about">
                About us
              </Link>
              <Link className="p-2" to="/services">
                Services
              </Link>
              <Link className="p-2" to="/contact">
                Contact us
              </Link>
            </Nav>
            <Link className="p-2 text-white" to="/cart">
              Cart ({`${cartItems.length}`} items)
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Layout;
