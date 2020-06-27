import React from 'react';
import { movies } from '../data';
import { render } from 'enzyme';

const Movies = () => {
  
  const renderMovies = movies.map((movie, index) => {
      return (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres: {movie.genres.map((genre, i) => {
            return (
              <ul>
                <li key={i}>{genre}</li>
              </ul>
            )
          })}
          </p>
        </div>
      )
    })
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
