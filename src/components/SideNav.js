import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const SideNav = () => {
  return (
    <div className="sidenav">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Games</Nav.Link>
      <Nav.Link href="#">High Scores Log</Nav.Link>
    </Nav>
  </div>
  );
};

export default SideNav;