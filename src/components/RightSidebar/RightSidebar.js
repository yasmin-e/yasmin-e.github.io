import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';

function RightSidebar() {
 return (
<nav> 
  <h1 className="title">portfolio</h1>
  <ul>
    <li>
      <Link to="/">
        <p className="link">project X</p>
      </Link>
    </li>
    <li>
      <Link to="/">
      <p className="link">project Y</p>
      </Link>
    </li>
    <li>
      <Link to="/">
      <p className="link">project Z</p>
      </Link>
    </li>
    <li>
      <Link to="/">
      <p className="link">project H</p>
      </Link>
    </li>
    <div className="tomato" /> 
  </ul>
</nav>
 )
}

export default RightSidebar;