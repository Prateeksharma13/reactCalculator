import React, { Component } from 'react';
import '../App.css';
import Calculator from '../components/Calculator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
              Calculator
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
