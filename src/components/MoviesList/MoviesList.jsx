import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Div, ListTitle, Title } from './MovieList.styled';
import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  trendingFilm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MoviesList;
