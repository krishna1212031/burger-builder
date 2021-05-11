import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = (props) => {
  return ( 
    <ul className= {classes.navigationItems}>
      <NavigationItem link ="/" active>BurgerBuilder</NavigationItem>
      <NavigationItem link ="/">Login</NavigationItem>
    </ul>
   );
}
 
export default navigationItems;