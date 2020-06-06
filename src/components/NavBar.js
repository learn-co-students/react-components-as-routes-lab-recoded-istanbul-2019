import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const NavBar = () => {
  const navItems = {
    display: 'block',
    listStyle: 'none'
  }
  return (
    <div className='navbar'>
      <NavLink to='/' style={navItems}>
        Home
      </NavLink>

      <NavLink to='/movies' exact style={navItems}>
        Movies
      </NavLink>

      <NavLink to='/directors' exact style={navItems}>
        Directors
      </NavLink>

      <NavLink to='/actors' exact style={navItems}>
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
