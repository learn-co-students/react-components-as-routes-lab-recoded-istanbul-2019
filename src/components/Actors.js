import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((x)=><div key={Math.random()} className="actor">
          <h1>{x.name}</h1>
          <ul>
           <li>{x.movies[0]}</li>
           <li>{x.movies[1]}</li>
           <li>{x.movies[2]}</li>
          </ul>
        </div>)
      }
    </div>
  );
};

export default Actors;