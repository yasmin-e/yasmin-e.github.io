import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';

function RightSidebar() {
 return (
<nav>
  <h1>Work</h1>
  <ul>
    <li>
      <Link to="/">Link 1</Link>
    </li>
    <li>
      <Link to="/">Link 2</Link>
    </li>
    <li>
      <Link to="/">Link 3</Link>
    </li>
    <li>
      <Link to="/">Link 4</Link>
    </li>
    <li>
      <Link to="/">Link 5</Link>
    </li>
  </ul>
</nav>
 )
}

export default RightSidebar;