import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { login } from '../actions/authentication';


const mapStateToProps = (state) => {
  return {
    count: state.LoggedIn
  }
}

const PasswordMatchMessage = (props) => {
  const { password, passwordB } = props;
  let visible = password != passwordB && passwordB.length > 0;
  return (
      visible ? 
      <Alert variant='danger'>
        Passwords must match
      </Alert>
      :
      <div></div>
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
      newUser: true
    };
  }

  componentWillMount() {
    this.setState({
      newUser: this.props.setting
    });
  }

  handleTestClick() {
    console.log("Clicked?");
    this.props.dispatch(login());
  }

  handleInputChange(event) {
    const {value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

  }

  switchView() {
    let currentView = this.state.newUser;
    this.setState({
      newUser: !currentView
    });
  }

  drawLogin() {
    return (
      <div className="reg-widget">
        <h4>Log in by entering your credentials below.</h4>
        <Form
          onSubmit={e => this.handleSubmit(e)}
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
    return (
      <div className="reg-widget">
        <h4>Register by entering your information below.</h4>
        <Form
          onSubmit={e => this.handleSubmit(e)}
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
          <Button variant="primary" type="submit">
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
    if (this.state.newUser) return this.drawRegister();
    else return this.drawLogin();

  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleTestClick()}>Test Login</Button>
        {this.giveWidget()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(AuthenticationWidget);