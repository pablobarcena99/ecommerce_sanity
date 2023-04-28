import React, { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import { Button, CloseButton, Container, Offcanvas } from "react-bootstrap";
import { QuantityButton, QuantityControls } from "../pages/product/[slug]";
import Navbar2 from "./Navbar2";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    cartItems,
    setCartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
    onRemove,
    setExpanded,
  } = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    // <Container>
    //   <div>
    //     <div className='cart-container'>
    //       <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
    //         <AiOutlineLeft />
    //         <span className='heading'>Your Cart</span>
    //         <span className='cart-num-items'>{totalQuantities} items</span>
    //       </button>
    //       {cartItems.length < 1 && (
    //         <div className='empty-cart'>
    //           <AiOutlineShopping size={150} />
    //           <h3>Your shopping bag is empty</h3>
    //           <Link href='/'>
    //             <Button type='button' onClick={() => setShowCart(false)}>
    //               Continue Shopping
    //             </Button>
    //           </Link>
    //         </div>
    //       )}

    //       <div className='product-container'>
    //         {cartItems.length >= 1 &&
    //           cartItems.map((item, index) => (
    //             <div className='product' key={item._id}>
    //               <img src={urlFor(item?.image[0])} className='cart-product-image' />
    //               <div className='item-desc'>
    //                 <div className='flex-top'>
    //                   <h5>{item.name}</h5>
    //                   <h4>{item.price}€</h4>
    //                 </div>
    //                 <div className='flex bottom'>
    //                   <QuantityControls>
    //                     <QuantityButton onClick={() => toggleCartItemQuantity(item._id, "dec")}>
    //                       {" "}
    //                       <AiOutlineMinus />
    //                     </QuantityButton>
    //                     <QuantityButton>{item.quantity}</QuantityButton>
    //                     <QuantityButton onClick={() => toggleCartItemQuantity(item._id, "inc")}>
    //                       {" "}
    //                       <AiOutlinePlus />
    //                     </QuantityButton>
    //                   </QuantityControls>
    //                   <button type='button' className='remove-item' onClick={() => onRemove(item)}>
    //                     <TiDeleteOutline />
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //       {cartItems.length >= 1 && (
    //         <div className='cart-bottom'>
    //           <div className='total'>
    //             <h3>Subtotal:</h3>
    //             <h3>{totalPrice}€</h3>
    //           </div>
    //           <Button type='button' className='btn' onClick={handleCheckout}>
    //             Pay
    //           </Button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </Container>

    <>
      <Offcanvas placement='end' show={showCart} id='cart' onHide={setShowCart}>
        <Offcanvas.Header>
          <Offcanvas.Title id='offcanvasCart'>Cart</Offcanvas.Title>
          <CloseButton
            variant='dark'
            onClick={() => {
              setShowCart(false);
              setExpanded(false);
            }}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{totalQuantities} items</p>
          <Button
            type='button'
            className='btn-danger'
            onClick={() => {
              setTotalQuantities(0);
              setCartItems([]);
              setTotalPrice(0);
            }}>
            Reset
          </Button>
          {cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>
              <Link href='/'>
                <Button type='button' onClick={() => setShowCart(false)}>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
          <div>
            {cartItems.length >= 1 &&
              cartItems.map((item, index) => (
                <div className='product' key={item._id}>
                  <img src={urlFor(item?.image[0])} className='cart-product-image' />
                  <div className='item-desc'>
                    <div className='flex-top'>
                      <h5>{item.name}</h5>
                      <h4>{item.price}€</h4>
                    </div>
                    <div className='flex justify-content-start'>
                      <QuantityControls>
                        <QuantityButton onClick={() => toggleCartItemQuantity(item._id, "dec")}>
                          {" "}
                          <AiOutlineMinus />
                        </QuantityButton>
                        <QuantityButton>{item.quantity}</QuantityButton>
                        <QuantityButton onClick={() => toggleCartItemQuantity(item._id, "inc")}>
                          {" "}
                          <AiOutlinePlus />
                        </QuantityButton>
                      </QuantityControls>
                      <button type='button' className='remove-item' onClick={() => onRemove(item)}>
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div>
              <div>
                <h3>Subtotal:</h3>
                <h3>{totalPrice}€</h3>
              </div>
              <Button type='button' className='btn' onClick={handleCheckout}>
                Pay
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
