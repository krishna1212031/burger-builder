import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem"
import React from 'react';
const navigationItems = (props) => {
  return ( 
    <ul className= {classes.navigationItems}>
      <NavigationItem link ="/burger-builder">BurgerBuilder</NavigationItem>
      <NavigationItem link ="/orders">Orders</NavigationItem>
    </ul>
   );
} 
 
export default navigationItems;