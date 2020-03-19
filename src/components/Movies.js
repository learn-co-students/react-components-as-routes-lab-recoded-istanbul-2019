import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie)=>{
        return <div>
          <h2>Movie Title:{movie.title}</h2>
          <p>{movie.time}</p>
       <ul>{movie.genres.map(movie=>
       {return <li>{movie}</li>})}</ul>
       </div>
   })
};
</div>
  )}

export default Movies;
