import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DrawRating from './DrawRating';
import { Link } from 'react-router-dom';


export const GamesListItem = (props) => {
  const game = props.game;
  return (
    <React.Fragment>
      <Row className="game-card">
        <Col xs={2}>
          <Image src="test-files/game_thumb.png" rounded fluid/>
          <DrawRating starRating={game.rating} />
        </Col>
        <Col>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </Col>
        <Col xs={2}>
          <Link to="/gameView">
            <Button>Play!</Button>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GamesListItem;