import React from 'react';
import { Link } from 'react-router-dom';
const MoviesList = ({ trendingFilm }) => {
  return (
    <div>
      <h2>Trending today</h2>

      <ul>
        {trendingFilm.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movie/${id}`}>{title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
