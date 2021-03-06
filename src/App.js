import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent.js';
import DishDetail from './components/dishDetailedComponent.js'
import { DISHES } from './shared/dishes.js'
import './App.css';

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            dishes: DISHES
        };
    }

    render(){
        return(
           <div>
            <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Restaurent con Fusion</NavbarBrand>
              </div>
            </Navbar>

            <Menu dishes={this.state.dishes} />
    
           </div>
        );
    }
}

export default App;
