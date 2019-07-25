import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar.js';
import Blurb from './Blurb.js';
import classNames from 'classnames';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import { Container, Row, Col } from 'reactstrap';
import WorkCards from './WorkCards.js';
import Carousel from './Carousel.js';
//Animation library import and CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleTheme = this.handleTheme.bind(this);
    this.state = {
      themes: ["green-and-blue", "poncho", "pizelex"],
      theme: "green-and-blue"
    };
  }
  componentDidMount(){
    AOS.init({
      duration : 1800,
      once: true,
    })
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
              {/* More Content Here */}
            </Row>
          </Container>

          <header data-aos="fade-left" className={classNames("App-header", "slide-header", "right")}>Education</header>
          <Container id="Education">
            <Row className="padded-top">
              <Carousel></Carousel>
            </Row>
          </Container>
          <br /><br />


          <header data-aos="fade-right" className={classNames("App-header", "slide-header", "left")}>Work Experience</header><br />
          <Container id="Jobs">
            <Row className="padded-top">
              <Col>
                <WorkCards></WorkCards>
              </Col>
            </Row>
          </Container>
          <br /><br />

          <header data-aos="fade-left" className={classNames("App-header", "slide-header", "right")}>Hobbies</header>
          <Container id="Hobbies">
            <Row className="padded-top">
              {/* More Content Here */}
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
