import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = directors.map((director, index) => {
    return (
      <div key={index}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map((movie, i) => {
            return (
            <li key={i}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors
