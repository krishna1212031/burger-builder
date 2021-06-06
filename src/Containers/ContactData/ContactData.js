import Button from "../../Components/UI/Button/Button";
import React, { Component } from "react";
import classes from "./ContactData.module.css";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalcode: "",
    },
    loader: false,
  };
  componentDidMount(){
    console.log(this.props)
  }
  
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loader: true });
    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
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
      .post(
        "https://my-burgers-fd830-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((responce) => {
        this.setState({ loader: false });
        this.props.history.push("/burger-builder");
      })
      .catch((error) => this.setState({ loader: false }));
  };
  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="emai" placeholder="Your Mail" />
        <input type="text" name="street" placeholder="Street Name" />
        <input type="text" name="postalcode" placeholder="Pincode" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loader) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
