import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ trendingFilm }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Trending today</h2>

      <ul>
        {trendingFilm &&
          trendingFilm.map(({ id, title }) => (
            <li key={id}>
              <Link state={{from: location}} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
