import classes from "./Order.module.css";

const order = (props) => {
  // console.log(props);
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span className={{ textTransform: "capitalize" ,
      display : "inlineblock",
      margin : "0 8px",
      border: '1px solid #ccc',
      padding: "5px"
      }} key={ig.name}>
        {ig.name} ({ig.amount}){" "}
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientOutput} </p>
      <p>
        Price: <strong> INR {props.price.toFixed(2)} </strong>{" "}
      </p>
    </div>
  );
};

export default order;
