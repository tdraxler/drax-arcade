import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export const Placeholder = () => {
  return (
    <div className="welcome-box">
      <Jumbotron>
      <h1>This is a placeholder</h1>
      <p>
        Available games will be displayed here.
      </p>
      <p>
        <Button variant="primary">Ok</Button>
      </p>
    </Jumbotron>
    </div>
  );
}

export default WelcomeBox;