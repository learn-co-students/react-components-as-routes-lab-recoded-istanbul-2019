import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie=>(
          <div>{movie.title}
          <br></br>
          <p>Duration:</p>
          {movie.time}
          {movie.genres.map(genre=>(
           <p>{genre}</p> 
          ))}
          </div>
          
        ))}
    </div>
  );
};

export default Movies;
