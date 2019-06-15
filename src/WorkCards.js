import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ExperienceCard from './ExperienceCard.js';
import BLK from './logos/BLK.jpg';
import MVI from './logos/MVI.jpg';
import RW from './logos/RWC.jpg';

export default class WorkCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [
                {
                    name: "BlackRock",
                    img: BLK,
                    description: "The world's largest asset management company, with a high standard of ethics and sense of duty to its clients.",
                    url: "https://www.blackrock.com/corporate",
                    date: "July 2019 -" 
                },
                {
                    name: "MVI Systems",
                    img: MVI,
                    description: "A software development company focused on video intercom products for residents and property management.",
                    url: "https://www.mvisystems.com/about",
                    date: "Nov 2018 - Mar 2019" 
                },
                {
                    name: "Retraction Watch",
                    img: RW,
                    description: "A blog and database designed to monitor retractions across hundreds of scientific journals.",
                    url: "http://retractionwatch.com/2010/08/03/why-write-a-blog-about-retractions/",
                    date: "Dec 2016 - Nov 2017" 
                }
            ]
        }
    }
    

    render() {

        let companyCards = this.state.companies.map((company, i) => {
            return (
                <Col key={i} md="4">
                    <ExperienceCard item={company}></ExperienceCard>
                </Col>
            )
        })
        console.log(this.state);
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
