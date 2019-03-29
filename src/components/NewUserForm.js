import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import React from 'react';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordB: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({passwordB: event.target.value});
  }

  handleSubmit(event) {
    var input = this.state;
    console.log(JSON.stringify(input));
    event.preventDefault();
    fetch('/createUser', {
      method: 'POST',
      body: JSON.stringify({
        username: input.username,
        password: input.password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.status === 200) {
        console.log("It worked.");
      } else {
        console.log(res);
        const error = new Error(res.error);
        console.log(error);
      }
    })
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
              type="text" placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm your password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={this.state.passwordB}
              onChange={this.handlePasswordBChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewUserForm;