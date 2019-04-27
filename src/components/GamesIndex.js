import React from 'react';
import GamesList from './GamesList';
import SideNav from './SideNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class GamesIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="arcade-container">
        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col sm={10}>
            <GamesList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GamesIndex;