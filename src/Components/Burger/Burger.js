import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const Burger = (props) => {
let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredient key={igKey + i } type = {igKey}/>;
    })
  })
  .reduce((arr,el)=>{ 
    return arr.concat(el)
  }, []) 

  if (transformedIngredients.length === 0 ){
      transformedIngredients = <p>Please Start Adding Ingredients!</p>
  }

  return ( 
    <div className= {classes.Burger}>
      <BurgerIngredient type = "breadTop"/> 
      {transformedIngredients}
      {/* <BurgerIngredient type = "Cheese"/> 
      <BurgerIngredient type = "Meat"/>   */}
      <BurgerIngredient type = "breadBottom"/> 

      
    </div>
   );
  
}
 
export default Burger;