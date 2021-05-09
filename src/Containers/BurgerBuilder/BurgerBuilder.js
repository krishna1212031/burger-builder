import { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../HOC/Hoc";

const ingredientsPrice = {
  salad: 10.25,
  bacon: 45.5,
  cheese: 20.75,
  meat: 55.34,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalprice: 20,
    purchaseble: false,
    purchasing: false,
  };

  purchasebleHandler = (newPrice)=>{
    if ( newPrice > 20 ) {
        this.setState({purchaseble:true})
      }
      else 
      this.setState({purchaseble:false  })
  }

  addHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const additionPrice = ingredientsPrice[type];
    const oldPrice = this.state.totalprice;
    const newPrice = additionPrice + oldPrice;

    this.setState({
      ingredients: newIngredients,
      totalprice: newPrice,
    });
    this.purchasebleHandler(newPrice);
  };

  removeHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount !== 0) {
      const newCount = oldCount - 1;
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type] = newCount;

      const deductionPrice = ingredientsPrice[type];
      const oldPrice = this.state.totalprice;
      const newPrice = oldPrice - deductionPrice;

      this.setState({
        ingredients: newIngredients,
        totalprice: newPrice,
      });
      this.purchasebleHandler(newPrice);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    // const disabledInfo =;

    return (
      <Aux>
        <Modal show = {this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addOn={this.addHandler}
          removeOut={this.removeHandler}
          isDisabled={!this.state.purchaseble}
          price={this.state.totalprice}
          ordered={this.purchaseHandler}
          lessDisabled = {this.state.ingredients}
          // statePurchase={this.purchaseble}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
