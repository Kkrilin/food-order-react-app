import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navbar onShowCart={props.onShowCart} />
    </header>
  );
};

export default Header;
