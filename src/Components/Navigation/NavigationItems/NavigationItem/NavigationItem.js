import classes from "./NavigationItem.module.css";
import React from 'react';
import {NavLink} from 'react-router-dom';
const navigationItem = (props) => {
  return (
    <li className={classes.navigationItem}>
      <NavLink to={props.link}
      activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
