import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LeftSidebar.scss'
import logo from '../../assets/logo.png';

function LeftSidebar() {
  const history = useHistory();
 return (
<nav>
  <div className="upper">
    <img 
      src={logo} 
      alt="logo" 
      className="logo"
      onClick={() => { history.push('/'); }}
      />
    <h1><span>yasmine abdelkefi</span></h1>
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