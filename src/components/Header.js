import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import { logout, login } from '../actions/authentication';
import { logoutRequest, loginRequest } from './Login';
import checkLoginStatus from './checkLoginStatus';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    // let userName = checkLoginStatus();
    // console.log("We have this: " + userName);
    // if (userName && userName != "") {
    //   this.props.dispatch(login({ username: userName}));
    // }
    checkLoginStatus()
    .then((result) => {
      if (result && result != "") {
        this.props.dispatch(login({ username: result}));
      }
    });

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
          <NavDropdown title={this.props.username} id="collapsible-nav-dropdown">
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.handleLogout}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>;
    } else {
      userStatus = <Nav><Nav.Link href="/">Register or Log In</Nav.Link></Nav>;
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand href="/">Drax Arcade</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/games">Games</Nav.Link> */}
            <LinkContainer to="/gamesTest">
              <Nav.Link href="/gamesTest">Games</Nav.Link>
            </LinkContainer>
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