import React, { useReducer } from "react";

import ReactDOM from "react-dom";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updateditems;
    if (existingItem) {
      const updateditem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updateditems = [...state.items];
      state.items[existingItemIndex] = updateditem;
    } else {
      updateditems = [...state.items, action.item];
    }
    return { items: updateditems, totalAmount: updatedtotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateditem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updateditem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
