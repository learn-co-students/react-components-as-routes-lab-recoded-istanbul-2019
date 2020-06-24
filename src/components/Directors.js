import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let actorsInfo =()=>{
    let oneDirector = directors.map(function(info, index){
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
    return oneDirector
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {actorsInfo()}
    </div>
  );
}

export default Directors
