import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import { loginRequest } from './Login';
import { regRequest } from './Register';
import { login } from '../actions/authentication';

const PasswordMatchMessage = (props) => {
  const { password, passwordB } = props;
  let visible = password != passwordB && passwordB.length > 0;
  return (
      visible ? 
      <Alert variant='warning'>
        Passwords must match
      </Alert>
      :
      <div></div>
  );
};

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

export class AuthenticationWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'login',
      username: '',
      password: '',
      passwordB: '',
      errorMessage: '',
      newUser: true,
      loading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillMount() {
    this.setState({
      newUser: this.props.setting
    });
  }

  handleTestClick() {
    console.log("Clicked?");
    // this.props.dispatch(login());
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

  handleRegister(event) {
    event.preventDefault();
    var input = this.state;
    this.setState({
      loading: true,
      errorMessage: ""
    }, () => {
      regRequest(input.username, input.password, input.passwordB)
      .then((result) => {
        console.log("Here: " + result.success);
        if (result.success) {
          console.log("success:");
          console.log(result);
          this.setState({
            loading: false
          });
          this.props.dispatch(login({ username: input.username}));
        }
        else {
          this.setState({ 
            loading: false,
            errorMessage: "alreadyExists"
          });          
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ 
          loading: false,
          errorMessage: "default"
        });
      });
    });
  }

  switchView() {
    let currentView = this.state.newUser;
    this.setState({
      newUser: !currentView,
      passwordB: '',
      errorMessage: '',
    });
  }

  drawLoading() {
    <div className="reg-widget">
      <h4>Loading...</h4>
    </div>
  }

  drawLogin() {
    return (
      <div className="reg-widget">
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
            <Button size="sm" variant="secondary" className="super-small" onClick={() => this.switchView()}>Register</Button>
        </div>
      </div>
    );
  }

  drawRegister() {
    let passwordsMatch = (this.state.password === this.state.passwordB);
    return (
      <div className="reg-widget">
        <h4>Register by entering your information below.</h4>
        <Form
          onSubmit={e => this.handleRegister(e)}
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm your password</Form.Label>
            <Form.Control 
              name="passwordB"
              type="password" 
              placeholder="Password" 
              value={this.state.passwordB}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <PasswordMatchMessage password={this.state.password} passwordB={this.state.passwordB}/>

          {this.state.errorMessage != "" && <ErrorMessage message={this.state.errorMessage}/>}
          <Button variant="primary" type="submit" disabled=
            {!passwordsMatch || this.state.password.length === 0 || this.state.username.length === 0}
          >
            Submit
          </Button>
        </Form>
        <div className="small-gap"></div>
        <div className="one-line">
            <p>Already a member? Click here:</p>
            <Button variant="secondary" size="sm" className="super-small" onClick={() => this.switchView()}>Log In</Button>
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
    else if (this.state.loading) {
      return this.drawLoading();
    }
    else if (this.state.newUser) {
      return this.drawRegister();
    }
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

export default connect(mapStateToProps)(AuthenticationWidget);