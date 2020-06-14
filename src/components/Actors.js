import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map((actor, i) => {
    return <div key={i}>
      <h3>{actor.name}</h3>
      {actor.movies.map((movie, i) => <ul key={i}>{movie}</ul>)}
      </div>
  })
  };
  return (
    <div>
        <h1>Actors Page</h1>
        {renderActors()}
    </div>
  );
};

export default Actors;
