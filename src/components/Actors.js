import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(act=>{
        return (
          <div className="actor" key={Math.random()}>
            <span>Name: {act.name}</span>
            <ul>
              <span>Movies:</span>
              {act.movies.map(actMov=>{
                return <li key={Math.random()}>{actMov}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
