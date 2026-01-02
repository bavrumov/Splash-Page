import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ExperienceCard from './ExperienceCard.js';
import AZ from './logos/amazon.png';
import SH from './logos/SH.png';
import BLK from './logos/BLK.jpg';
import MVI from './logos/MVI.jpg';
import RW from './logos/RWC.jpg';

export default class WorkCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [
                {
                    name: "Amazon",
                    img: AZ,
                    description: "Earth's most customer-centric company. Here, I work on the Traffic Engineering team, providing connectivity and reliability for AWS services worldwide.",
                    url: "https://www.aboutamazon.com/about-us",
                    date: "Jan 2025 - "
                },
                {
                    name: "StubHub",
                    img: SH,
                    description: "Largest global secondary market for tickets to live events. I handled reconciliation and the month-end accounting process for Viagogo and StubHub entities.",
                    url: "https://www.stubhub.com/about",
                    date: "Feb 2024 - Jan 2025"
                },
                {
                    name: "BlackRock",
                    img: BLK,
                    description: "The world's largest asset management firm. I worked accross the Aladdin platform on many teams, including ETFs, Trading, Reconciliation, and API Tools.",
                    url: "https://www.blackrock.com/corporate",
                    date: "July 2019 - Feb 2024"
                },
                {
                    name: "MVI Systems",
                    img: MVI,
                    description: "A software startup focused on video intercom products for residents and property managers. I made fullstack contributions on the management dashboard webapp.",
                    url: "https://www.mvisystems.com/about",
                    date: "Nov 2018 - Mar 2019"
                },
                {
                    name: "Retraction Watch",
                    img: RW,
                    description: "A blog and database designed to monitor retractions across hundreds of scientific journals. Data entry was my main role, with some scripts to automate the process.",
                    url: "http://retractionwatch.com/2010/08/03/why-write-a-blog-about-retractions/",
                    date: "Dec 2016 - Nov 2017"
                }
            ]
        }
    }
    
    render() {

        let companyCards = this.state.companies.map((company, i) => {
            return (
                <Col data-aos="flip-up" key={i} md="4">
                    <ExperienceCard item={company}></ExperienceCard>
                </Col>
            )
        })

        return (
            <div>
                <Container>
                    <Row>
                        {companyCards}
                    </Row>
                </Container>
            </div>
        )
    }
}
