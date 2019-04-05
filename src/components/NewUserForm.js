import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import React from 'react';

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

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordB: ''
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
    console.log(JSON.stringify(input));
    event.preventDefault();
    fetch('/createUser', {
      method: 'POST',
      body: JSON.stringify({
        username: input.username,
        password: input.password,
        passwordB: input.passwordB
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

export default NewUserForm;