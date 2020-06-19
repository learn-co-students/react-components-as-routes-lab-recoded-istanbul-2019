import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((item, idx) =>
        <div key={item + idx}>
          <h2>{item.name}</h2>
          <ul>{item.movies.map((movie, idx) => (<li key={movie + idx}>{movie}</li>))}</ul>
        </div>)}

    </div>

  );
}

export default Directors