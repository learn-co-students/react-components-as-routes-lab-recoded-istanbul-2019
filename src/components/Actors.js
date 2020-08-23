import React from 'react';
import { actors } from '../data';
const Actors = () => {
  let actorsInfo =()=>{
    let OneActor= actors.map(function(info, index){
      return  <div key={index}>
      <h3>Name: {info.name}</h3>
      <p>Movies:</p>
      <ul>
          {info.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
              ))}
              </ul>
          </div>
    })
    return OneActor
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsInfo()}
    </div>
  );
};

export default Actors;
