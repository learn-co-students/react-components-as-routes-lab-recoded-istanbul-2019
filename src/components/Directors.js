import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map((director, i) => {
    return <div key={i}>
      <h3>{director.name}</h3>
      {director.movies.map((movie, i) => <ul key={i}>{movie}</ul>)}
      </div>
  })
  };
  return (
    <div>
        <h1>Directors Page</h1>
        {renderDirectors()}
    </div>
  );
}

export default Directors
