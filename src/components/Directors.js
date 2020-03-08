import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir=>{
        return (
          <div key={Math.random()}>
            <span>Name: {dir.name}</span>
            <ul>
              <span>Movies</span>
            {dir.movies.map(dirMov=>{
              return <li key={Math.random()}>{dirMov}</li>
            })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
