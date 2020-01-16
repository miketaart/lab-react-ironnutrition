import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from "./foods.json"; //this is the variable 'foods' mentioned in the lab exercise
import Foodbox from "./components/Foodbox";
import AddFood from './components/AddFood';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: "",
        calories: "",
        image: "",
        quantity: "",
        showForm: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick = () => {
    this.setState({ showForm: !this.state.showForm })
}
  
  render() {

    const {showForm} = this.state;

    return (
      <div className="App">

        <AddFood/>

        <div class="buttons">
          <button class="button is-large is-success" onClick={() => this.handleToggleClick() }>
            Add Food
          </button>
        </div>
        
        {foods.map((food, index) => //Iteration 2
        <Foodbox
          key={index}
          image={food.image}
          name={food.name}
          calories={food.calories}
        />
        )}
      </div>
    );
  }
}

