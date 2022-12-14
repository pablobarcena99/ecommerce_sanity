import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <Container fluid>
      <div className='navbar-container'>
        <Link href='/'>
          <p className='logo'>Logo</p>
        </Link>

        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </Container>
  );
};

export default Navbar;
