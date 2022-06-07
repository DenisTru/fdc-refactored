import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavigationBar.scss'


export function NavigationBar() {
  return (
  <nav className="nav">
    <NavLink to='/' className="site-title">LOGO</NavLink>
    <ul>
      <li>
        <NavLink to="/Home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
    </ul>
  </nav>
  );
}

//creating a navbar with react router https://www.youtube.com/watch?v=SLfhMt5OUPI
//useResolvedPath and making these routes more dynamic 15mins in