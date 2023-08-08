import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servise/servise';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div>
      <h2>Cast</h2>
      {cast && cast.length > 0 ? (
         <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img src="https://via.placeholder.com/185x250" alt='' />
              )}

              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
      </ul>
      ) : (
        <p>There is no information about the actors of the film</p>
      )}
     
    </div>
  );
};

export default Cast;
