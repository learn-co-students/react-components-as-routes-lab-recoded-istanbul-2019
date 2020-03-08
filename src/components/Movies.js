import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(mov=>{
          return (
            <div key={Math.random()} >
              <p>Name: {mov.title}</p>
          <span>Time: {mov.time}</span>
          <ul>
            <span>Genres:</span>
            {mov.genres.map(gen=>{
              return (
              <li key={Math.random()}>{gen}</li>
              )
            })}
          </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
