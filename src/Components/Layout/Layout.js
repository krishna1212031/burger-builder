import classes from "./layout.module.css";
import Aux from "../../HOC/Hoc";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { Component } from "react";
import React from 'react';
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggle = () => {
    this.setState((prevState)=>{
      return{ showSideDrawer: !prevState.showSideDrawer }});
  };
  
  render() {
    return (

      <Aux>
        <Toolbar drawerToggleClicked = {this.sideDrawerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
