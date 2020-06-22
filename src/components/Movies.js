import React from 'react';
import { movies } from '../data';

const moviesRender = () =>{
  const movieList = movies.map(movie =>{
    return(
      <div>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      {movie.genres.map(genre => {
        return(
          <ul>
            <li>{genre}</li>
          </ul>
        )
      })}
    </div>
    )
  }) 

  return  movieList
}

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesRender()}
    </div>
  );
};

export default Movies;