import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={classes.toolbar}>
      <DrawerToggle clicked ={props.drawerToggleClicked}/>
      <Logo />
      <nav className={classes.desktop}>
        <NavigationItems/> 
      </nav>
    </header>
    ); 
}
 
export default toolbar;