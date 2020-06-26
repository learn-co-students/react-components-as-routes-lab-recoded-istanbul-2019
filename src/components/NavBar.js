import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return(
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: '#595DA5'
        }}
      >Home</NavLink>

      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: '#595DA5'
        }}
      >Movies</NavLink>

      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: '#595DA5'
        }}
      >Directors</NavLink>

      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: '#595DA5'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;