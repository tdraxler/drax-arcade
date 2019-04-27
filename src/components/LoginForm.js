//OBSOLETE

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var input = this.state;
    event.preventDefault();
    fetch('/login', {
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
        this.props.history.push('/');
      } else {
        console.log(res);
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Couldn't log you in for some reason.");
    });
  }

  render() {
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
}

export default LoginForm;