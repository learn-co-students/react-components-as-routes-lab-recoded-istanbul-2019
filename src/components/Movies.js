import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div>
            <h2>{movie.title}</h2>
            <h4>{movie.time}</h4>
            <ul>
              {movie.genres}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
