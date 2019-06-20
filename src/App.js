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
  constructor(props) {
    super(props);

    this.handleTheme = this.handleTheme.bind(this);
    this.state = {
      themes: ["green-and-blue", "poncho", "pizelex"],
      theme: "green-and-blue"
    };
  }

  handleTheme(x) {
    this.setState({
      theme: this.state.themes[x]
    });
  }

  render() {

    return (
      <div className={classNames("App", this.state.theme)}>
        <NavigationBar handleTheme={this.handleTheme}/>
          
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
