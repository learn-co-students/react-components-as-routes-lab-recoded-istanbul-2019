import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderd = directors.map((director, index) => {
    return <div key={index}>
      <h3>{director.name}</h3>
      {director.movies.map((movie, index) => <ul key={index}>{movie}</ul>)}
      </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {renderd}
    </div>
  );
}

export default Directors
