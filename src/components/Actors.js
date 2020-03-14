import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Actors Page</h1>     
        {actors.map(actor=>{ return <div key={Math.random()}> <h3>{actor.name} </h3><ul>
          {actor.movies.map(gen => {return <li  key={Math.random()}>{gen}</li>})}
          </ul></div>})}      
    </div>
  );
};

export default Actors;
