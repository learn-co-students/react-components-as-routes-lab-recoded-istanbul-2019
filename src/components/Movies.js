import React from 'react';
import { movies } from '../data';

const Movies = (props) => {

  const renderMovies = () => {
    return movies.map((movie, i) => {
    return <div key={i}>
      <h3>{movie.title}</h3>
      <h3>{movie.time}</h3>
      {movie.genres.map((genre, i) => <ul key={i}>{genre}</ul>)}
      </div>
  })
  };
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;