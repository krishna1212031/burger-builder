import classes from "./CheckoutSummary.module.css";
import Burger from "../Burger/Burger"
import Button from "../UI/Button/Button"
import React from 'react';
const checkoutSummary = (props) => {
  return ( 
    <div className = {classes.checkoutSummary}>
      <h1>Hope it is delicious!</h1>
      <div style = {{width: "300px", margin : "auto"}}>
        <Burger ingredients = {props.ingredients}/>
      </div>
      <Button btnType= "Danger"
      clicked = {props.checkoutCancelled}
      >Cancel</Button>
      <Button btnType= "Success"
      clicked={props.checkoutContinued}
      >Continue</Button>

    </div>
   );
}
 
export default checkoutSummary;