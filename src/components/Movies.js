import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const printMovies = () => {
    return movies.map((eachMovie, idx) =>
      (<div key={eachMovie + idx}>
        <h2>{eachMovie.title}</h2>
        <p>{eachMovie.time} mins</p>
        <ul>{eachMovie.genres.map((genre, idx) => (<li key={genre + idx}>{genre}</li>))}</ul>
      </div>)
    )
  };

  return (
    <div>
      <h1>Movies Page</h1>
      {printMovies()}
    </div>
  );
};

export default Movies;
