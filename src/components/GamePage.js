import React from 'react';
import Placeholder from './Placeholder';
import SideNav from './SideNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const GamePage = () => {
  return (
    <div className="arcade-container">
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col sm={10}>
          <Placeholder />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;