import { Component } from "react";
import Aux from "../../HOC/Hoc";



class BurgerBuilder extends Component{

  render(){ 
    return(
      <Aux>
         <div>Burger</div>
        <div>Build Control</div>
      </Aux>

    );
  }
}

export default BurgerBuilder;