import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meal from "./components/fooditem/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/Cartprovider";

const App = () => {
  const [cartIsShown, setCartISShown] = useState(false);

  const showcarthandler = () => {
    setCartISShown(true);
  };

  const hidecarthandler = () => {
    setCartISShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hidecarthandler} />}
      <Header onShowCart={showcarthandler} />
      <Meal />
    </CartProvider>
  );
};

export default App;
