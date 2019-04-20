import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import { logout } from '../actions/authentication';
import { logoutRequest } from './Login';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    console.log("Logging out...");
    this.setState({
      loading: true
    }, () => {
      logoutRequest()
      .then((result) => {
        console.log("success:");
        console.log(result);
        this.setState({
          loading: false
        });
        this.props.dispatch(logout());
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
    });
  }

  render() {
    let userStatus;

    if (this.props.loggedIn) {
      userStatus =
        <Nav>
          <Nav.Link href="#" onClick={this.handleLogout}>Log Out</Nav.Link>
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