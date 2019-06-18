import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

/* The Navigation Bar component renders a DOM element that provides navigation shortcuts
 *  to the different parts of the page. When the browser isn't wide enough, this component
 *  also collapses into a mobile-friendly "hamburger menu" which toggles on and off.
 */

export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeTheme = this.changeTheme.bind(this);

    this.state = {
      isOpen: false,
      themes: ["green-and-blue", "poncho", "pizelex"],
      theme: "green-and-blue"
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  changeTheme(x) {
    console.log(x);
    this.setState({
      theme: this.state.themes[x]
    });
  }
  render() {
    return (
        <Navbar id="top" className="navbar sticky-top" color="dark" dark expand="md">
          <NavbarBrand href="/">
            Boris Avrumov
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Jobs">Work Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Hobbies">Hobbies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#bottom">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Resume-link">Resume</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Themes
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={()=>this.changeTheme(0)}>
                    Green and Blue
                  </DropdownItem>
                  <DropdownItem
                    onClick={()=>this.changeTheme(1)}>
                    Poncho
                  </DropdownItem>
                  <DropdownItem
                    onClick={()=>this.changeTheme(2)}>
                    Pizelex
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={()=>this.changeTheme(parseInt(Math.random()*3))}>
                    Random
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar