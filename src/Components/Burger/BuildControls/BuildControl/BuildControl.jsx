import classes from "./BuildControl.module.css";
import React from 'react';
const buildControl = (props) => {
  return ( 
    <div className = {classes.buildControl}>
      <div className= {classes.label}>{props.label}</div>
      <button className= {classes.less} onClick= {props.removeIn} disabled = {props.isDisabled} >Less</button>
      {/* <p>{props.counting}</p> */}
      <button className={classes.more} onClick= {props.addIn} >More</button> 
    </div>
   );
}
 
export default buildControl;