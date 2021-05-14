// import axios from "axios";
import axios from '../../axios-orders';
import { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../HOC/Hoc";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler";
import Burger from "../../Components/Burger/Burger";


const ingredientsPrice = {
  asalad: 10.25,
  bacon: 45.5,
  cheese: 20.75,
  meat: 55.34,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalprice: 20,
    purchaseble: false,
    purchasing: false,
    loader: false,
  };

  componentDidMount() {
    axios
      .get('ingredients.json')
      .then((responce) => {
        this.setState({ingredients : responce.data })
      })
      
  }

  purchasebleHandler = (newPrice) => {
    if (newPrice > 20) {
      this.setState({ purchaseble: true });
    } else this.setState({ purchaseble: false });
  };

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

  purchasCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchasContinueHandler = () => {
    this.setState({ loader: true });
    const order = {
      ingredient: this.state.ingredients,
      totalPrice: this.state.totalprice,
      customer: {
        name: "krishna",
        address: {
          street: "6th main",
          pincode: "560068",
          country: "india",
        },
        email: "krishna@something.com",
      },
    };

    axios
      .post("https://my-burgers-fd830-default-rtdb.firebaseio.com/orders.json", order)
      .then((responce) => this.setState({ loader: false, purchasing: false }))
      .catch((error) => this.setState({ loader: false, purchasing: false }));

    // alert("You Continue !!!!!!");
  };

  render() {
    // const disabledInfo =;
    let orderSummary = null;

    let burger = <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addOn={this.addHandler}
            removeOut={this.removeHandler}
            isDisabled={!this.state.purchaseble}
            price={this.state.totalprice}
            ordered={this.purchaseHandler}
            lessDisabled={this.state.ingredients}
            // statePurchase={this.purchaseble}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchasCancelHandler}
          purchaseContinued={this.purchasContinueHandler}
          price={this.state.totalprice}
        />
      );
    }

    if (this.state.loader) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
