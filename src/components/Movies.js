import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let actorsInfo =()=>{
    let oneDirector = movies.map(function(info, index){
      return  <div key={index}>
      <h3>Name: {info.title}</h3>
    <p>time:{info.time}</p>
    <p>Genres</p>
      <ul>
          {info.genres.map((movie, index) => (
              <li key={index}>{movie}</li>
              ))}
              </ul>
          </div>
    })
    return oneDirector
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {actorsInfo()}
    </div>
  );
};

export default Movies;
