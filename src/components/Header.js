import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <Nav.Link href="#" onClick={this.handleLogout}>Log Out</Nav.Link>
        </Nav>;
    } else {
      userStatus = <Nav><Nav.Link href="/">Register or Log In</Nav.Link></Nav>;
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand href="/">Drax Arcade</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/games">Games</Nav.Link> */}
            <Link to="/gamesTest">
              <Nav.Link href="/gamesTest">Games</Nav.Link>
            </Link>
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