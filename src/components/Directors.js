import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directoData = directors.map((curr, idx) => {
    return (
      <div key={idx}>
        <h4>{curr.name}</h4>
    {curr.movies.map(movie => <ul key={movie}>{movie}</ul>)}
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directoData}
    </div>
  );
}

export default Directors
