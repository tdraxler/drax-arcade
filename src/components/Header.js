import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

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
      userStatus =
        <Nav>
          <Nav.Link href="/">Log Out</Nav.Link>
        </Nav>;
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
            <Nav.Link href="/">status: {this.props.loggedIn && "logged in"}</Nav.Link>
          </Nav>
          <Nav>
            {userStatus}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(Header);