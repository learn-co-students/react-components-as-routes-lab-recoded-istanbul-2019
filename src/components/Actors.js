import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = actors.map((actor, index) => {
    return (
      <div key={index}>
        <p className="actor">{actor.name}</p>
        {actor.movies.map((movie, i) => {
            return (
              <ul>
                <li key={i}>{movie}</li>
              </ul>
            )
          })}
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
