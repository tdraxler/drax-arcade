import React from 'react';
import NewGame from './forms/SubmitNewGame';
import SideNav from './SideNav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AdminView = () => {
  return (
    <div className="arcade-container">
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col sm={10}>
          <NewGame />
        </Col>
      </Row>
    </div>
  );
};

export default AdminView;