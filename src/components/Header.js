import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>This is a Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Hello there</Card.Subtitle>
          <Card.Text>
            Here is some text for the user to see. It's not very interesting yet.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Header;