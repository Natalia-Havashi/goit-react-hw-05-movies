import React, { useEffect, useState } from 'react';
import { getSearchMovies } from 'servise/servise';
import MoviesForm from 'components/MoviesForm/MoviesForm';

const MoviesPages = () => {
  const [query, setQuery] = useState('');
  useEffect(() => {
    const getSearch = async () => {
      try {
        const { results } = getSearchMovies();
        setQuery(results);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch()
  }, [query]);
  return (
  <div>
    <MoviesForm query={query} />
  </div>
    )
};

export default MoviesPages;
