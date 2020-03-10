import React from "react";
import { movies } from "../data";

const renderMovie = () => {
  return movies.map(movie => {
    return (
      <div>
        <h2>Title: {movie.title}</h2>
        <h3>Time: {movie.time}</h3>
        <ul>
          Genres:{" "}
          {movie.genres.map(genre => {
            return <li>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovie()}
    </div>
  );
};

export default Movies;
