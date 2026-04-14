import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';
import BLK from './logos/BLK.jpg';
// Used as a template and not actually needed in production
export default class SampleCard extends Component {
  render() {
    return (
        <div>
        <Card>
            <CardHeader>July 2019 - </CardHeader>
            <CardImg top width="50%" src={BLK} alt="BlackRock" />
            <CardBody>
            <CardTitle>BlackRock</CardTitle>
            <CardSubtitle>Subtitle Text</CardSubtitle>
            <CardText>Card Text</CardText>
            <CardFooter>The world's largest asset manager</CardFooter>
            </CardBody>
        </Card>
        </div>
    );
    };
}
