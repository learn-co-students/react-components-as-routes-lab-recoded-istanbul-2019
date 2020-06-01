import React from 'react';
import { movies } from '../data';
import { render } from 'enzyme';

const Movies = () => {

  const renderd = movies.map((movie, index) => {
    return <div key={index}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => <ul key={index}>{genre}</ul>)}
      </div>
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {renderd}
    </div>
  );
};

export default Movies;
