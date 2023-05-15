import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const addToCartHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const removeFromCartHenadler = (id) => {
    cartCtx.removeItem(id);
  };
  return items.map((item) => (
    <li className={classes["cart-item"]} key={item.id}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>₹{item.price}</span>
          <span className={classes.quantity}>X {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={addToCartHandler.bind(null, item)}>Add more</button>
        <button onClick={removeFromCartHenadler.bind(null, item.id)}>
          Remove
        </button>
      </div>
    </li>
  ));
};
export default CartItem;
