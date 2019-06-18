import React, { Component } from 'react';
import Anchor from './Anchor.js';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';

export default class ExperienceCard extends Component {
    
    // static propTypes = {
    //     name: PropTypes.string,         // Company name
    //     img: PropTypes.object,          // Image object
    //     description: PropTypes.string,  // Card Footer
    //     date: PropTypes.string,         // Optional Header
    // }

    render() {
        const footerStyle = {
            fontSize: '0.8em'
        }

        return (
            <div>
            <Card>
                <CardHeader><Anchor name={this.props.item.name} url={this.props.item.url}></Anchor></CardHeader>
                <CardImg top width="100%" src={this.props.item.img} alt={this.props.name} />
                <CardBody>
                    <CardTitle>{this.props.item.date}</CardTitle>
                    <CardSubtitle>{this.props.item.subtitle}</CardSubtitle>
                    <CardText>{this.props.item.text}</CardText>
                    <CardFooter style={footerStyle}>{this.props.item.description}</CardFooter>
                </CardBody>
            </Card>
            <br /> {/* To stop cards from touching eachother in column view */}
            </div>
        )
    }
}
