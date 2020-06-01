import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsData = actors.map((curr, idx) => {
    return (
      <div key={idx}>
        <h3>{curr.name}</h3>
    {curr.movies.map(movie => <ul key={movie}>{movie}</ul>)}
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsData}
    </div>
  );
};

export default Actors;
