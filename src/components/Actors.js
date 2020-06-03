import React from 'react';
import { actors } from '../data';
const actorsRender = () =>{
  const actorsList = actors.map(actor =>{
    return(
      <div>
      <h3>{actor.name}</h3>
      {actor.movies.map(moive => {
        return(
          <ul>
            <li>{moive}</li>
          </ul>        )
      })}
    </div>)
  }) 
  return  actorsList }
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actorsRender()}
    </div>
  );
};
export default Actors;