import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


export const SideNav = () => {
  return (
    <div className="sidenav">
    <Nav defaultActiveKey="/home" className="flex-column">
      <LinkContainer to="/"><Nav.Link href="#">Home</Nav.Link></LinkContainer>
      <LinkContainer to="/gamesTest"><Nav.Link href="#">Games</Nav.Link></LinkContainer>
      <LinkContainer to="/"><Nav.Link href="#">High Scores Log</Nav.Link></LinkContainer>
    </Nav>
  </div>
  );
};

export default SideNav;