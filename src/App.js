import React, { Component } from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import {Header} from './Header.js';
import Portrait from './Portrait.js';
import './App.css';

class App extends Component {
  render() {
    let themes = ["green-and-blue", "poncho", "pizelex"];
    let theme = themes[parseInt(Math.random()*3)];
    //console.log(parseInt(Math.random()*3));
    //let theme = "green-and-blue";
    //let theme = "poncho";
    //let theme = "pizelex";
    return (
      <div className="App">
        
        <header className={"App-header "+theme}>
          <Header id="navigation-bar" names={["About Me", "Projects", "Contact"]}></Header>
          <div id="0" className="image-container"><Portrait></Portrait></div>
          <div id="1" className="image-container"><Portrait name="ivy.jpg"></Portrait></div>

          <p>
            Anything we want can go here. Some sample text.
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
        <div id="bottom"><Portrait></Portrait></div>
      </div>
    );
  }
}

export default App;
