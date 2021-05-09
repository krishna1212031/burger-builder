import classes from "./BurgerIngredient.module.css";
import { Component } from "react";
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
  render  () {
    let ingredient = "null";
    switch (this.props.type) {
      case "breadBottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "breadTop":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seed1}></div>
            <div className={classes.Seed2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = "null";
        return ingredient;
    }
    return ingredient;
  }
}

BurgerIngredient.protoTypes = {
  type : PropTypes.string.required
}

export default BurgerIngredient;