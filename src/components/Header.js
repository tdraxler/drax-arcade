import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    }
  }

  render() {
    let userStatus;

    if (this.state.loggedIn) {
      userStatus = <span>
        <Nav>
          <Nav.Link href="/">Welcome back, Thomas</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Log Out</Nav.Link>
        </Nav>
      </span>
    } else {
      userStatus = <Nav><Nav.Link href="/">Register or Log In</Nav.Link></Nav>;
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Drax Arcade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/games">Games</Nav.Link>
          </Nav>
          <Nav>
            {userStatus}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;