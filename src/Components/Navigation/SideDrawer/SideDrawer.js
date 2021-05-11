import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../HOC/Hoc";
import BackDrop from "../../UI/BackDrop/BackDrop";


const sideDrawer = (props) => {
  let attatchedClasses = [classes.sideDrawer, classes.close];
  if(props.open){
    attatchedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked = {props.closed}/>
      <div className={attatchedClasses.join(' ')}>
        <div className={classes.logo}> 
          <Logo />
        </div>
        <nav> 
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
