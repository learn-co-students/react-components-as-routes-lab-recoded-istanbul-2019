import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const data = () => movies.map((curr, idx) => {
    console.log(curr)
    return (
      <div key={idx}>
        <h2>{curr.title}</h2>
        <h3>{curr.time}</h3>
        
    {curr.genres.map(genre => <ul key={genre+1}>{genre}</ul>)}
        
      </div>
    )
    
  })

  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {data()}
    </div>
  );
};

export default Movies;
