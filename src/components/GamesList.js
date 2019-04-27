import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export class GamesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Tetris</Card.Title>
            <Card.Text>
              Soon there will be a description of a game here.
            </Card.Text>
            <Button variant="primary">Play</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GamesList;