import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExperienceCard from './ExperienceCard.jsx';
import yugiAI from './logos/projects/yugi-ai.png';
import durak from './logos/projects/durak.png';
import portfolio98 from './logos/projects/portfolio98.png';
import paycheck from './logos/projects/paycheck.png';

export default class ProjectCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    name: "YugiAI",
                    img: yugiAI,
                    description: "AI-powered rulings assistant for the Yu-Gi-Oh! TCG. Ask any ruling question and get a judge-quality answer in seconds, powered by Claude via AWS Bedrock. Features confidence scoring, card nickname recognition, and multi-model support.",
                    url: "https://yugiai.com/",
                    liveUrl: "https://yugiai.com/",
                    repoUrl: "https://github.com/bavrumov/Yugi-AI",
                    date: "Feb 2025"
                },
                {
                    name: "Paycheck Calculator",
                    img: paycheck,
                    description: "A Bash CLI tool that calculates take-home pay after taxes. Provide your annual salary and optional ZIP code to fetch a paycheck estimate from SmartAsset, with results copied to clipboard automatically.",
                    url: "https://github.com/bavrumov/PaycheckCalculator",
                    repoUrl: "https://github.com/bavrumov/PaycheckCalculator",
                    date: "Mar 2019"
                },
                {
                    name: "Durak Card Game",
                    img: durak,
                    description: "Browser-based version of the classic Russian card game Durak. Play against a computer opponent in this pure HTML/JavaScript implementation of the beloved card game.",
                    url: "https://bavrumov.github.io/durak-card-game/",
                    liveUrl: "https://bavrumov.github.io/durak-card-game/",
                    repoUrl: "https://github.com/bavrumov/durak-card-game",
                    date: "Jan 2016"
                },
                {
                    name: "bavrumov.github.io",
                    img: portfolio98,
                    description: "Original personal portfolio site with a Windows 98-inspired retro desktop aesthetic. Built with vanilla HTML, CSS, and JavaScript — features a file-system-style interface with icons, folders, and a color picker.",
                    url: "https://bavrumov.github.io/",
                    liveUrl: "https://bavrumov.github.io/",
                    repoUrl: "https://github.com/bavrumov/bavrumov.github.io",
                    date: "May 2016"
                }
            ]
        }
    }

    render() {
        let projectCards = this.state.projects.map((project, i) => {
            return (
                <Col data-aos="flip-up" key={i} md="4">
                    <ExperienceCard item={project}></ExperienceCard>
                </Col>
            )
        })

        return (
            <div>
                <Container>
                    <Row>
                        {projectCards}
                    </Row>
                </Container>
            </div>
        )
    }
}
