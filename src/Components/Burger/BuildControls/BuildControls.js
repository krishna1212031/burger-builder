import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.buildControls}>
      <p>Total Price = {props.price.toFixed(2)}</p>
      {controls.map((ctrl) => (
        <BuildControl 
          key={ctrl.label} label={ctrl.label} 
          addIn = {()=>props.addOn(ctrl.type)} 
          removeIn = {()=>props.removeOut(ctrl.type)} 
          // counting = {props.count(ctrl.type)}
          isDisabled = {props.lessDisabled[ctrl.type] === 0}
        />
      ))}
      <button className ={classes.OrderButton} onClick ={props.ordered} disabled = {props.isDisabled} >ORDER NOW</button>
    </div>
  );
};

export default buildControls;
