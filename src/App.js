import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person />
      
      </div>
    );
  //  return React.createElement("div", {className: "App"}, React.createElement("h1", null, "This Works Now"))
  }
}

export default App;
