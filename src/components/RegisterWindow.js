import React from 'react';
import WelcomeBox from './WelcomeBox';
import SideNav from './SideNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const MainPage = () => {
  return (
    <div className="arcade-container">
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col sm={10}>
          <WelcomeBox />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;