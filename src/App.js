import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: "Andy", age: 34},
      {name: "Max", age: 36},
      {name: "Olya", age: 35}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: "Max", age: 37},
        {name: "Olya", age: 35}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Andy", age: 34},
        {name: event.target.value, age: 37},
        {name: "Olya", age: 35}
      ]
    });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return ( 
    <div className = "App" >
      <h1> First Steps </h1> 
      
      <button
      style={style} 
      onClick={() => this.switchNameHandler('Andrey')}
      >Switch Name</button>
      
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>  
      
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'Andrushka')}
      changed={this.nameChangeHandler}>My hobbies: Press
      </Person>

      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;