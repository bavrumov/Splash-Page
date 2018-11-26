import React, { Component } from 'react';
import logo from './tf.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Anything we want can go here. Anything about tensor, or a component that will let us draw and export an input.
          </p>
          
          <a
            className="App-link"
            href="https://stackoverflow.com/questions/2480650/role-of-bias-in-neural-networks/2499936#2499936"
            target="_blank"
            rel="noopener noreferrer"
          >
            A good explanation on weights and bias
            </a>
          <a
            className="App-link"
            href="http://bavrumov.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My personal site
          </a>
        </header>
      </div>
    );
  }
}

export default App;
