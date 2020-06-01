import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderd = actors.map((actor, index) => {
    return <div key={index}>
      <h3>{actor.name}</h3>
      {actor.movies.map((movie, index) => <ul key={index}>{movie}</ul>)}
      </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {renderd}
    </div>
  );
};

export default Actors;
