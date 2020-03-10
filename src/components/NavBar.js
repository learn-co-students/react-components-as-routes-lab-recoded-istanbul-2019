import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "purple",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => {
  return (
    <div className={"navbar"}>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: "blue"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: "blue"
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: "blue"
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: "blue"
        }}
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
