import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <li className={classes.navigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
