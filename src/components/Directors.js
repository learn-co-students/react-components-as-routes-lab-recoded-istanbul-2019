import React from 'react';
import { directors } from '../data';

const directorsRender = () =>{
  const directorsList = directors.map(director =>{
    return(
      <div>
      <h3>{director.name}</h3>
      {director.movies.map(moive => {
        return(
          <ul>
            <li>{moive}</li>
          </ul>
        )
      })}
    </div>
    )
  }) 

  return  directorsList
}

const Directors = () => {
console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsRender()}
    </div>
  );
}

export default Directors