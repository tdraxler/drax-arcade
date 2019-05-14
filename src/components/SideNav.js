import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


export const SideNav = () => {
  return (
    <div className="sidenav">
    {/* <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Games</Nav.Link>
      <Nav.Link href="#">High Scores Log</Nav.Link>
    </Nav> */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gamesTest">Games</Link>
      </li>
      <li>
        <Link to="/">High Scores Log</Link>
      </li>
    </ul>

  </div>
  );
};

export default SideNav;