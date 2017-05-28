import React , { Component } from 'react';
import { render } from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Navigate extends Component {

  constructor( props ) {
    super( props );
  }
  componentWillMount() {}
  componentDidMount() {}


  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Music</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">帳戶</NavItem>
            <NavItem eventKey={2} href="#">anything</NavItem>
            <NavDropdown eventKey={3} title="更多" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>1</MenuItem>
              <MenuItem eventKey={3.2}>2</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="#">登入</NavItem>
            <NavItem eventKey={2} href="#">註冊</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
