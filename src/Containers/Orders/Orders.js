import { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../HOC/withErrorHandler";
import Spinner from "../../Components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loader: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        console.log(res);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        // console.log(fetchedOrders);
        this.setState({ loader: false, orders: fetchedOrders });
      })
      .catch((error) => {
        this.setState({ loader: false });
      });
     
  }

  render() {
    let order = null;
    if (this.state.loader){
      order = <Spinner/>
    }
    else {order = this.state.orders.map((order) => (
      <Order key = {order.id}
      ingredients = {order.ingredient}
      price = {+order.price}
      />
    )).reverse()}
    return (
      <div>
        {order}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
