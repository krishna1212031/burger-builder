import classes from "./OrderSummary.module.css";
import Aux from "../../../HOC/Hoc";

const orderSummary = (props) => {
    const ingredientSummry = Object.keys(props.ingredients).map(
      igKey => {
        return (<li><span style = {{textTransform :"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>)
      }
    ) 

  return ( 
    <Aux >
      <p className={classes.orderSummary}>Your Order </p>
      <p className={classes.orderSummary}>A delicious burger with the following ingredients</p>
      <ul className={classes.orderSummary}>
        {ingredientSummry}
      </ul>
      <p className={classes.orderSummary}>Continue To Checkout</p>
    </Aux>

   );
}
 
export default orderSummary;