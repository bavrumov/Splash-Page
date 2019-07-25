// The following lines import the photos of the team,
// as well as the Row and Column components from the reactstrap library.

import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import bths from './logos/uni/BTHS.jpg';
import mhc from './logos/uni/MHC.png';
import bc from './logos/uni/BC.jpg';
import sbu from './logos/uni/SBU.jpg';
import {Row, Col} from 'reactstrap'
import classNames from 'classnames';
import AnimatedCollapsible from './AnimatedCollapsible.js';

// Here, json objects are defined to include pertinent information about schools.
// They are broken into key:value pairs, with "name" being an example of a key.

const tech= {
    name: 'Brooklyn Tech High School',
    head: "Where it all began.",
    bio: "I was introduced to coding in the Software Engineering major, made amazing lifelong friends, and learned HTML, CSS, JS, PHP, SQL, and Java. I graduated in 2015, when jQuery was a hot and new thing. Wait, what's ES6?",
    pic: bths
}

const macaulay= {
    name: 'Macaulay Honors College',
    head: "My lifeline and sponsor.",
    bio: "Aside from providing me a free education and laptop, Macaulay pushed me to take honors classes, maintain a high GPA, volunteer, and intern. They house amazing staff who helped push me in the right career direction.",
    pic: mhc
}

const brooklyn= {
    name: 'Brooklyn College',
    head: "My main campus.",
    bio: "This is where I took a bulk of my classes, went to the gym, and eagerly powered through my Computer Science education. By senior year, I tutored a handful of students and gained a network of eager professionals.",
    pic: bc
}

const stony= {
    name: 'Stony Brook University',
    head: "What's a Seawolf?",
    bio: "A home away from home, I commuted to this campus every month to visit old friends (and make new ones). Brookfest, Homecoming, Senior Ball, & Pipettes Invitationals are just some of my treasured memories of this school.",
    pic: sbu
}


var schools = [tech, brooklyn, macaulay, stony];


/* The Carousel component renders a DOM element that contains all of the team's information.
 *
 * It does this dynamically with createCarousel(), which uses an array of JavaScript objects
 *  and iterates over them to populate sub-columns with our data. By calling on the right
 *  key:value pair, data gets written to its respective styled tag.
 * After a column is generated, it is given the mobile responsive property of resizing its
 *  width depending on browser size. Each column then gets pushed to the page.
 */

export default class Carousel extends Component {
  
    createCarousel = () => {
      const schoolText = {
        border: "1px solid black",
        backgroundColor: "rgba(255,255,255,0.5)",
        padding: "8%",
        borderRadius: "4px",
      }

        let elements = [];
        

        for(let i = 0; i < schools.length; i++) {
             elements.push(
             <Col xs={12} sm={6} md={3} key={i}>
                <div style = {{width:"100%", paddingTop:"1em"}}>
                  <img
                  className = {classNames("rounded-image", "shadow-img")}
                  src = {schools[i].pic}
                  alt = {schools[i].name}
                  width="75%"
                  />
                </div>
                <br />
                <h3 style={{minHeight:"4em"}}>{schools[i].name}</h3>
                <div style={schoolText}>
                 <h4 style={{minHeight:"4em", padding:"3%"}}>{schools[i].head}</h4>
                 <hr />
                 <h5><AnimatedCollapsible text={schools[i].bio}></AnimatedCollapsible></h5>
                </div>
              </Col>
             )
        }
        return elements;
    }
  
  render() {

    return (
      <div className="container">
        <Row style={{display:"flex"}}>
          {this.createCarousel()}
        </Row>
      </div>
    )
  }
}