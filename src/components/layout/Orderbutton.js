import React, { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./Orderbutton.module.css";
import CartContext from "../../store/cart-context";

const Orderbutton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const totalQuantity = items.reduce(
    (totalQua, item) => totalQua + item.quantity,
    0
  );

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span>Order</span>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{totalQuantity}</span>
    </button>
  );
};
export default Orderbutton;
