import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <from id="to-do-from">
            <input type="text" placeholder="Enter text" />
            <button type="submit">Add</button>
          </from>
        </header>
      </div>
    );
  }
}

export default App;

