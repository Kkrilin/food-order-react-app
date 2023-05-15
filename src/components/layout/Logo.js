import React from "react";
import logo from "../../Assets/ruchir foods1.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return <img className={classes.img} src={logo} alt="brand logo" />;
};
export default Logo;
