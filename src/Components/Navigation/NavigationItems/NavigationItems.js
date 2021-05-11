import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = (props) => {
  return ( 
    <ul className= {classes.navigationItems}>
      <NavigationItem link ="/burger-builder" active>BurgerBuilder</NavigationItem>
      <NavigationItem link ="/burger-builder">Login</NavigationItem>
    </ul>
   );
} 
 
export default navigationItems;