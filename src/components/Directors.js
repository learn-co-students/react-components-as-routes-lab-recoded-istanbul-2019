import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(person=>{
        return (
          <div key={Math.random()}>
            <p>Name: {person.name}</p>
            <p>Movies</p>
            <ul>
              {person.movies.map(mov=>{
              return <li key={Math.random()}>{mov}</li>
            })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
