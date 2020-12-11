import React from 'react';
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
    <h1 className="name">yasmine abdelkefi</h1>
  </div>
  <div className="lower">
    <ul className="list">
      <li>
        <a href="https://github.com/yasmin-e" alt="github account">
          <p className="link">github</p>
        </a>
      </li>
      <li>
        <Link to="/contact" alt="contact page">
          <p className="link">contact me</p>
        </Link>
      </li>
      <li>
        <Link to="/cv" alt="cv page">
          <p className="link">curriculum vitae</p>
        </Link>
      </li>
      <div className="tomato" />
    </ul>
  </div>
</nav>
 )
}

export default LeftSidebar;