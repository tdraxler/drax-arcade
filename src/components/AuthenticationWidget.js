import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const PasswordMatchMessage = (props) => {
  const { password, passwordB } = props;
  let visible = password != passwordB && passwordB.length > 0;
  console.log(password + ", " + passwordB + ", " + visible);
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
      passwordB: ''
    };
  }

  handleInputChange(event) {
    const {value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

  }

  drawLogin() {
    return (
      <div>
        <h3>Log in by entering your credentials below.</h3>
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
      </div>
    );
  }

  drawRegister() {
    return (
      <div>
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
      </div>
    );
  }

  giveWidget() {
    //Checks for login state and returns the appropriate component
    //TODO: Add ways to check for login status
    return this.drawRegister();
  }

  render() {
    return (
      <div>
        {this.giveWidget()}
      </div>
    )
  }
}

export default AuthenticationWidget;