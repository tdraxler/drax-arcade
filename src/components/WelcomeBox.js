import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import AuthenticationWidget from './AuthenticationWidget';

export class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showRegWidget: false
    }
  }

  onButtonClick(e) {
    let opposite = !this.state.showRegWidget;
    this.setState({showRegWidget: opposite});
  }
  
  render() {
    let regDisplay;

    if (this.state.showRegWidget) {
      regDisplay = <AuthenticationWidget />;
    } else {
      regDisplay = 
        <div className="one-line">
          <Button className="small-padding" onClick={e => this.onButtonClick(e)} variant="primary">Register</Button>
          <Button className="small-padding" variant="outline-primary">Log In</Button>
        </div>;
    }   

    return (
      <div className="welcome-box">
        <Jumbotron>
          <h1>Welcome</h1>
          <p>
            Come play some games in your browser. Register to rate games, post comments, 
            and show your high scores to the world.
          </p>
          <a href="/games">Click here to see what games we have!</a>
          {regDisplay}
        </Jumbotron>
      </div>
    );
  }
}

export default WelcomeBox;