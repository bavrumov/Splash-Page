import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Portrait from './Portrait.js';
import Anchor from './Anchor.js';
import AnimatedCollapsible from './AnimatedCollapsible.js'

class Blurb extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            helper: true,
        }

        this.vanishInstructions = this.vanishInstructions.bind(this);
    }

    vanishInstructions() {
        this.setState({
            helper: false
        });
    }

    render() {
        let instruction;
        if (this.state.helper)
            instruction = <h6>Click "{String.fromCharCode(0x2335)}" for info</h6>
        else
            instruction = "";

        let blurb = <Container fluid={true}>
                <Row>
                <Col lg={{size:3, offset:2}} sm={{size:4, offset:1}}>
                    <Portrait name="fun"></Portrait>
                </Col>
                <Col lg={5} sm={6}>
                    Why does this site exist, you ask? <hr />
                    I wanted to give my audience a visual history of myself, told by my schools, work, and projects. Feel free to make your presence known and reach out to me using any of the buttons below!
                    <hr />
                    <Row>
                        <Col xs={8}><Anchor name="Former personal site" url="http://bavrumov.github.io/"></Anchor></Col>
                        <Col xs={4}><Anchor name="Email me" url="mailto:bavrumov@hotmail.com"></Anchor></Col>
                    </Row>
                </Col>
                </Row><br />
            </Container>
        return (
            <header className={"App-header"}>
                {instruction}
                <AnimatedCollapsible onClick={this.vanishInstructions} text={blurb}></AnimatedCollapsible>
            </header>
        )
    }
}

export default Blurb