import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export class Header extends Component {
  static propTypes = {
    names : PropTypes.array,
    id : PropTypes.string
  }

  render() {
    this.props.names.forEach(name => {  console.log(name);  });
    //console.log(this.props.names);
    return (
        // <div>{
        //     this.props.names.map((name,i) => <div key={i}>{name}</div>)
        // }</div>
        
        <Navbar id={this.props.id}>
            <Navbar.Header>
                {/* <Navbar.Brand>
                <a href="#bottom">Boris Avrumov</a>
                </Navbar.Brand> */}
                {/* <Navbar.Toggle /> */}
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>

                {this.props.names.map((name, i) => 
                    //console.log(i),
                    <NavItem eventKey={i} href={`#${i}`}>
                        {name}
                    </NavItem>
                )}

                <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={1} href="#navigation-bar">
                    Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link Right
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header
