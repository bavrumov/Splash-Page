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
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="top" className="navbar" color="dark" dark expand="md">
          <NavbarBrand href="/">Boris Avrumov</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#App-body">Bio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Jobs">Work Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Hobbies">Hobbies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#bottom">Socials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Resume-link">Resume</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Themes
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Green and Blue
                  </DropdownItem>
                  <DropdownItem>
                    Poncho
                  </DropdownItem>
                  <DropdownItem>
                    Pizelex
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Random
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar