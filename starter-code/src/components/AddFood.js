import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './AddFood.css'


class AddFood extends Component {
    constructor(props){
        super(props);
        this.state = { 
          name: "",
          calories: "",
          image: "",
        }
    }

    handleToggleClick = () => {
      this.setState(
        { showForm: !this.state.showForm })
    }

    //Iteration 3: 
    // check toggle example in lesson about 'conditional rendering'
    // also check lesson about 'forms'
    // push the properties into the arrays
    
    render(){
        return (
          
          <div class="form">
          {this.state.on &&
            <form onSubmit={this.handleFormSubmit}>
              <input class="input is-info" type="text" placeholder="name"/>
              <input class="input is-info" type="text" placeholder="calories"/>
              <input class="input is-info" type="text" placeholder="image"/>
              <input type="submit" value="Submit" />
            </form>  
          }
          </div>
        )
      }
    }
  
  export default AddFood;

