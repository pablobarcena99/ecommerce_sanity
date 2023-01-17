import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import styled from "styled-components";

const Navbar2 = () => {
  const [expanded, setExpanded] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <Navbar bg='light' expand='lg' expanded={expanded} sticky='top' variant='light'>
        <Container>
            <Navbar.Brand href='/'>logo.</Navbar.Brand>
            <Navbar.Toggle
              aria-controls='basic-navbar-nav'
              onClick={() => setExpanded(expanded ? false : "expanded")}
              className='btn border-0'
            />
            <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <Nav.Link onClick={() => setShowCart(true)}>Cart ({totalQuantities})</Nav.Link>
                {showCart && <Cart />}
              </Nav>
            </Navbar.Collapse>
            {/* <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className='cart-item-qty'>{totalQuantities}</span>
            </button> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
