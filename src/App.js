import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here's some text. <code>code sample text</code> and save to reload.
          </p>
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
