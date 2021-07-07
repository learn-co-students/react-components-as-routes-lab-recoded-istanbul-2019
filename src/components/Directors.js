import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((el) => (
        <div >
          <p>{el.name}</p>
          <ul>
            {el.movies.map((movie) => (
              <li >{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Directors
