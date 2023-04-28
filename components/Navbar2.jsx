import React from "react";
import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import styled from "styled-components";


const Navbar2 = () => {

  const { showCart, setShowCart, totalQuantities, expanded, setExpanded} = useStateContext();



  return (
    <>
      <Navbar bg='transparent' expand='lg' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>logo.</Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar'
            className='btn border-0'
            onClick={() => setExpanded(true)}
          />
          <Navbar.Offcanvas
            show={expanded}
            onHide={setExpanded}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton className='btn-close-black'>
              <Offcanvas.Title id='offcanvasNavbarLabel'>logo.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link onClick={() => setShowCart(true)}>Cart ({totalQuantities})</Nav.Link>
                {showCart && <Cart />}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
