import React, { Component } from 'react';
import {NavigationBar} from './NavigationBar.js';
import Anchor from './Anchor.js';
//import Portrait from './Portrait.js';
import sunsetpic from './res/slide1.png';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import {Container, Row, Col} from 'reactstrap';
import WorkCards from './WorkCards.js';
import Carousel from './Carousel.js';

class App extends Component {
  render() {
    //let themes = ["green-and-blue", "poncho", "pizelex"];
    //let theme = themes[parseInt(Math.random()*3)];
    let theme = "green-and-blue";
    //let theme = "poncho";
    //let theme = "pizelex";
    return (
      <div className={"App " + theme}>
        <NavigationBar></NavigationBar>
        <header className={"App-header"}>
          {/* <Header id="navigation-bar" names={["About Me", "Projects", "Contact"]}></Header>
          <div id="0" className="image-container"><Portrait></Portrait></div>
          <div id="1" className="image-container"><Portrait name="ivy.jpg"></Portrait></div> */}
          
          <Anchor name="My old personal site" url="http://bavrumov.github.io/"></Anchor>
        </header>
          
        <div className="App-body">

          <Container id="App-body">
            <Row className="padded-top">
              
              <Col md={{size:8, offset:2}}>
                <img className="image-container" alt="a sunset" src={sunsetpic}/>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="padded-top">
              <Col xs={12}><Carousel></Carousel></Col>
            </Row>
          </Container>

          <Container id="Jobs">
            <Row className="padded-top">
              <Col>
                <WorkCards></WorkCards>
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
