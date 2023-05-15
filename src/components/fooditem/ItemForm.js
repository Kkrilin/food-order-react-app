import React, { useContext, useRef } from "react";
import classes from "./ItemForm.module.css";
import CartContext from "../../store/cart-context";

const Itemform = (props) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();
  const formSubmitHandler = (event) => {
    const inputQuantity = +inputRef.current.value;

    const mealList = {
      id: props.id,
      name: props.name,
      quantity: inputQuantity,
      price: props.price,
    };

    cartCtx.addItem(mealList);

    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor={props.id}>Quantity</label>
      <input
        ref={inputRef}
        id={props.id}
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
      <button>Add to cart</button>
    </form>
  );
};

export default Itemform;
