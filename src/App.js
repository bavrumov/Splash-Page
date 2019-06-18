import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar.js';
import Blurb from './Blurb.js';
import classNames from 'classnames';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import { Container, Row, Col } from 'reactstrap';
import WorkCards from './WorkCards.js';
import Carousel from './Carousel.js';

class App extends Component {
  render() {
    //let theme = themes[parseInt(Math.random()*3)];
    let theme = "green-and-blue";
    //let theme = "poncho";
    //let theme = "pizelex";

    return (
      <div className={classNames("App", theme)}>
        <NavigationBar />
          
        <div className="App-body">

          <Container id="App-body">
            <Row className="padded-top">
              More Content Here
            </Row>
          </Container>

          <Container id="Education">
            <Row className="padded-top">
              <Carousel></Carousel>
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
        <Blurb />
        <div id="bottom"> <hr/>
          <Tachyonsocialfooter></Tachyonsocialfooter>
        </div>

      </div>
    );
  }
}

export default App;
