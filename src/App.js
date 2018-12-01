import React, { Component } from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import {Header} from './Header.js';
import Portrait from './Portrait.js';
import './App.css';

class App extends Component {
  render() {
    let theme = "green-and-blue";
    //let theme = "poncho";
    //let theme = "pizelex";
    return (
      <div className="App">
        <Header names={["Boris, Ivy"]}></Header>
        
        <header className={"App-header "+theme}>
          
        <div className="image-container"><Portrait></Portrait></div>
        <div className="image-container"><Portrait name="ivy.jpg"></Portrait></div>
          <p>
            Anything we want can go here. Some sample text. I love you Ivy;
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
