import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>     
        {movies.map(movie=>{ return <div key={Math.random()}> <h3>{movie.title} </h3> <p> {movie.time}</p><ul>
          {movie.genres.map(gen => {return <li  key={Math.random()}>{gen}</li>})}
          </ul></div>})}      
    </div>
  );
};

export default Movies;
