import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css'

function LeftSidebar() {
 return (
<nav>
  <div className="upper">
    <img src="" alt="logo" />
    <h1>yasmine</h1>
  </div>
  <div className="lower">
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
  </div>
</nav>
 )
}

export default LeftSidebar;