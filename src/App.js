import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import {Route} from 'react-router-dom'
import Orders from './Containers/Orders/Orders';


function App() {
  return (
    <div>
      <Layout>
        <Route path = '/checkout' component = {Checkout}/>
        <Route path = '/burger-builder' exact component = {BurgerBuilder}/>
        <Route path = '/Orders' exact component = {Orders}/>
      </Layout>
    </div> 
  );
}   

export default App;
