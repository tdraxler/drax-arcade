import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import { loginRequest } from '../Login';
import { login } from '../../actions/authentication';
import { Link } from 'react-router-dom';


//TODO - Move this to a separate file since it's used multiple times.
const ErrorMessage = (props) => {
  let errorMessage;
  switch(props.message) {
    case 'alreadyExists':
      errorMessage = "That username is already taken.";
      break;
    case 'incorrectCredentials':
      errorMessage = "Incorrect username or password";
      break;
    default:
      errorMessage = "Something went wrong!";
  }
  return (
    <Alert variant='danger'>
      {errorMessage}
    </Alert>
  );
}

export class TinyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'login',
      username: '',
      password: '',
      errorMessage: '',
      loading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
  }

  handleInputChange(event) {
    const {value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    var input = this.state;
    this.setState({
      loading: true,
      errorMessage: ""
    }, () => {
      loginRequest(input.username, input.password)
      .then((result) => {
        console.log("success:");
        console.log(result);
        this.setState({
          loading: false
        });
        this.props.dispatch(login({ username: input.username}));
      })
      .catch(error => {
        console.log(error);
        this.setState({ 
          loading: false,
          errorMessage: "incorrectCredentials"
        });
      });
    });
  }

  drawLoading() {
    <div className="reg-widget">
      <h4>Loading...</h4>
    </div>
  }

  drawLogin() {
    return (
      <div className="tiny-login">
        <h4>Log in by entering your credentials below.</h4>
        <Form
          onSubmit={e => this.handleLogin(e)}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text" placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              name="password"
              type="password" 
              placeholder="Password" 
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          {this.state.errorMessage != "" && <ErrorMessage message={this.state.errorMessage}/>}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="small-gap"></div>
        <div className="one-line">
            <p>Don't have an account? Click here: </p>
            <Link data-toggle="dropdown" to={{  
              pathname: '/',
              state: {
                openView: "register"
              }
            }}>
              <Button size="sm" variant="secondary" className="super-small" data-toggle="dropdown">Register</Button>
            </Link>
        </div>
      </div>
    );
  }

  giveWidget() {
    if (this.props.loggedIn) {
      return (
        <div>
          <h4>Logged in</h4>
        </div>
      );
    }
    else if (this.state.loading)
      return this.drawLoading();
    else return this.drawLogin();
  }

  render() {
    return (
      <div>
        {/* <Button variant="primary" onClick={() => this.handleTestClick()}>Test Login</Button> */}
        {this.giveWidget()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(TinyLogin);