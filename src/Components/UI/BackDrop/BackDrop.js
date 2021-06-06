import classes from "./BackDrop.module.css";
import React from 'react';
const backDrop = (props) => {
  return (  
    props.show?<div className={classes.backdrop} onClick= {props.clicked}></div>:null
   );
}
 
export default backDrop;