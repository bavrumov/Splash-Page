import React, { Component } from 'react';
import Anchor from './Anchor.jsx';
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
    
        const { item } = this.props;
        const headerUrl = item.liveUrl || item.url;

        return (
            <div>
            <Card>
                <CardHeader><Anchor name={item.name} url={headerUrl}></Anchor></CardHeader>
                <CardImg top width="100%" src={item.img} alt={item.name} />
                <CardBody>
                    <CardTitle>{(item.date).padEnd(19, '\u00A0')}</CardTitle>
                    <CardSubtitle>{item.subtitle}</CardSubtitle>
                    <CardText>{item.text}</CardText>
                    <CardFooter style={footerStyle}>
                        {item.description}
                        {item.repoUrl && (
                            <div><Anchor name="View source →" url={item.repoUrl}></Anchor></div>
                        )}
                    </CardFooter>
                </CardBody>
            </Card>
            <br /> {/* To stop cards from touching eachother in column view */}
            </div>
        )
    }
}
