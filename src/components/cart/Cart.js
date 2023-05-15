import React, { useContext, useState } from "react";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalCartAmount = cartCtx.totalAmount;
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        <CartItem onHideCart={props.onHideCart} />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalCartAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
