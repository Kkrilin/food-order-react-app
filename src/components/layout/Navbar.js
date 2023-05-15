import React from "react";
import classes from "./Navbar.module.css";
import Orderbutton from "./Orderbutton";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.nav}>
        <li>About Us </li>
        <li>Menu</li>
      </ul>
      <Orderbutton onShowCart={props.onShowCart} />
    </React.Fragment>
  );
};

export default Navbar;
