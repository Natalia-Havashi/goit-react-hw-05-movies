import React, { useEffect, useState } from 'react';
import { getSearchMovies } from 'servise/servise';
import MoviesForm from 'components/MoviesForm/MoviesForm';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('search') ?? '';
  const location = useLocation();

  useEffect(() => {
    !movieQuery && setSearchParams({});
  }, [movieQuery, setSearchParams]); //чистимо рядок запиту

  useEffect(() => {
    const getSearch = async () => {
      if (movieQuery) {
        try {
          const { results } = await getSearchMovies(movieQuery);
          setMovies(results);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getSearch();
  }, [movieQuery]);
  return (
    <div>
      <MoviesForm setSearchParams={setSearchParams} movieQuery={movieQuery} />
      <ul>
        {movies.map(({ id, title}) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPages;
