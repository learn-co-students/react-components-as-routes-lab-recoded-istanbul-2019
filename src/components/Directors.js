import React from "react";
import { directors } from "../data";

const renderDirectors = () => {
  return directors.map(director => {
    return (
      <div>
        <h2>Director Name: {director.name} </h2>
        <ul>
          <h4>Movies: </h4>
          {director.movies.map(movie => {
            return <li>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
};

export default Directors;
