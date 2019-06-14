import React, { Component } from 'react';
import {NavigationBar} from './NavigationBar.js';
//import Portrait from './Portrait.js';
import sunsetpic from './res/slide1.png';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import {Container, Row, Col} from 'reactstrap';
import SampleCard from './SampleCard.js';

class App extends Component {
  render() {
    let themes = ["green-and-blue", "poncho", "pizelex"];
    let theme = themes[parseInt(Math.random()*3)];
    //let theme = "green-and-blue";
    //let theme = "poncho";
    //let theme = "pizelex";
    return (
      <div className={"App " + theme}>
        <NavigationBar></NavigationBar>
        <header className={"App-header"}>
          {/* <Header id="navigation-bar" names={["About Me", "Projects", "Contact"]}></Header>
          <div id="0" className="image-container"><Portrait></Portrait></div>
          <div id="1" className="image-container"><Portrait name="ivy.jpg"></Portrait></div> */}
          
          <a target="_blank" rel="noopener noreferrer" className="App-link" href="http://bavrumov.github.io/">
            My old personal site
          </a>
        </header>
          
        <div className="App-body">
          <Container>
          {/* <Row sm={{size:10, offset:1}}> */}
          <Row className="job-row">
            <Col md={4} xs={6}>
              <SampleCard></SampleCard>
            </Col>
            <Col md={4}>
              <img className="image-container" alt="a sunset" src={sunsetpic}/>
            </Col>
            <Col md={4}>
            <div>Anything we want can go here. Some sample text.</div>
            </Col>
          </Row>
          </Container>
          
        </div>

        <div id="bottom"> <hr/>
          <Tachyonsocialfooter></Tachyonsocialfooter>
        </div>

      </div>
    );
  }
}

export default App;
