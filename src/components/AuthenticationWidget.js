import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

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

  drawLogin() {

  }

  drawRegister() {

  }

  render() {
    return (
      <div>
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
}