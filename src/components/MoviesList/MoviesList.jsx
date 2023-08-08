import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Div, ListTitle, Title } from './MovieList.styled';
const MoviesList = ({ trendingFilm }) => {
  const location = useLocation();
  return (
    <Div>
      <Title>Trending today:</Title>

      <ListTitle>
        {trendingFilm &&
          trendingFilm.map(({ id, title }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
      </ListTitle>
    </Div>
  );
};

export default MoviesList;
