import classes from "./Logo.module.css";
import React from 'react';
import BurgerLogo from "../../Assets/Images/BurgerLogo.png"
const logo = (props) => {
  return ( 
    <div className ={classes.logo} >
      <img src = {BurgerLogo} alt = "My Burger"/>
      <p>Burger-Builder</p>
    </div>
   );
}
 
export default logo;