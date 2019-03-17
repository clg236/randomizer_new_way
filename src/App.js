import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //state goes here, we need a list of students
  constructor(props) {
    super(props)
    this.state = {
      students: ['Kyra', 'Bonie', 'Cara', 'Selena', 'Adam', 'Grace', 'Helen', 'Xavier', 
      'Harry', 'Hanna', 'Sam', 'Kimmy', 'Evan', 'Kevin', 'Abdullah', 'Kai'],
      groupSize: 4,
      groups: [],
    }
  }

  // set our group size based on what the user types in our input
  // this format: name = (argument) => { }; is called an arrow function.
  handleInputChange = (input) => {
    let number = parseInt(input.target.value, 10);
    this.setState({groupSize: number});
  };

  //now, we should have a state value (called size)
  //we can use this when we click on the button
  shuffle = () => {
    
    //declare the array, our students
    let array = this.state.students;
    
    //declare variables for us to use in the shuffle
    let j, x, i;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    this.splitIntoGroups(array, this.state.groupSize); 
  }

  // now we want to slice into groupSize groups.
  // we can use the array.slice method 
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice
  splitIntoGroups(array, numOfChunks) {
    
    let groups = [];

    for(let i=0; i < array.length; i+=numOfChunks) {
      let group = array.slice(i, i+numOfChunks);

      //add this group to groups in our state
      groups.push(group);
    }
    // no need to return anything, this function did its job,
    // just update our state with this object (an array of student groups)
    this.setState({groups: groups});
  }

  render() {
    return (
      <div className="App">
        <h3>New and Improved!</h3>
        <h1>Randomizer!</h1>
        <input type="number" onChange={this.handleInputChange} placeholder="group size" />
        <button onClick={this.shuffle}>Make a group!</button>
        {this.state.groups.map((group, index) => <p><strong>Group {index + 1}:</strong> {group.join(' ')}</p>)}
      </div>
    );
  }
}

export default App;
