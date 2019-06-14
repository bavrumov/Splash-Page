import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';
import BLK from './logos/BLK.jpg';

export default class SampleCard extends Component {
  render() {
    return (
        <div>
        <Card>
            <CardHeader>July 2019 - </CardHeader>
            <CardImg top width="100%" src={BLK} alt="BlackRock" />
            <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText></CardText>
            <CardFooter>The world's largest asset manager</CardFooter>
            </CardBody>
        </Card>
        </div>
    );
    };
}
