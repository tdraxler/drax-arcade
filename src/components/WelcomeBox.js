import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="welcome-box">
        <Jumbotron>
        <h1>Welcome</h1>
        <p>
          Come play some games in your browser. Register to rate games, post comments, 
          and show your high scores to the world.
        </p>
        <a href="/games">Click here for the games listing</a>
        <p>
          <Button variant="primary">Register</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}

export default WelcomeBox;