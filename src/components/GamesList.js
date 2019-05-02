import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DrawRating from './DrawRating';

export class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }
  render() {
    return (
      <div>
        <Row className="game-card">
          <Col xs={2}>
            <Image src="test-files/game_thumb.png" rounded fluid/>
            <DrawRating starRating={7} />
          </Col>
          <Col>
            <h3>Tetris</h3>
            <p>The classic puzzle game of dropping shapes. Test your abilities now!</p>
          </Col>
          <Col>
            <Button>Play!</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GamesList;