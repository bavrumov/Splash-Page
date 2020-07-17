import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar.js';
import Blurb from './Blurb.js';
import classNames from 'classnames';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import { Container, Row, Col } from 'reactstrap';
import WorkCards from './WorkCards.js';
import Carousel from './Carousel.js';
import AOS from 'aos'; //Animation library import and CSS
import 'aos/dist/aos.css';
import FadedHeader from './FadedHeader.js'
import Portrait from './Portrait.js';
import Anchor from './Anchor.js'
import PayPalDonateButton from './PayPalDonateButton.js'

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

          <div style={{minHeight:"3em"}}></div>

          <FadedHeader title="Hi! My name is" side="right" fade="left"></FadedHeader>
            <br />
          <Container id="App-body">
            <Row className="padded-top">
              <Col lg={{size:4, offset:1}} sm={{size:4, offset:1, order:1}} xs={{order:12}}>
                <div data-aos="flip-left"><Portrait></Portrait></div>
              </Col>
              <Col data-aos="flip-right" lg={{size:5, offset:1}} sm={{size:6, order:12}} xs={{order:1}}>
                <h1>Boris Avrumov</h1> <hr />
                I'm a software engineer based in NYC. My full time job is Responsible Older Brother and Eldest Child™, 
                but recently I've also taken up employment as an Analyst at BlackRock as part of the Aladdin Product Group.<br />
                <hr />
              </Col>
            </Row>
          </Container>

          <div style={{minHeight:"3em"}}></div>

          <FadedHeader title="Education" side="left" fade="right"></FadedHeader>
          <Container id="Education">
            <Row className="padded-top">
              <Carousel></Carousel> {/* Moved data-aos to component*/}
            </Row>
          </Container>
            <br />
          <div style={{minHeight:"3em"}}></div>

          <FadedHeader title="Work Experience" side="left" fade="right"></FadedHeader>
          <br />
          <Container id="Jobs">
            <Row className="padded-top">
              <Col>
                <WorkCards></WorkCards> {/* Moved data-aos to component*/}
              </Col>
            </Row>
          </Container>
            <br /><br />

          <FadedHeader title="Projects" side="left" fade="right"></FadedHeader>
            <br />
          <Container id="Projects">
            <Row className="padded-top">
              <h2>Projects will go here. Coming soon! <br /> In the meantime you can 
              <Anchor name="find them here," url="https://github.com/bavrumov?tab=repositories"/>
              or get in touch below and donate a ☕</h2>
            </Row>
            <Row>
              <PayPalDonateButton></PayPalDonateButton>
            </Row>
          </Container>

          <div style={{minHeight:"3em"}}></div>

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
