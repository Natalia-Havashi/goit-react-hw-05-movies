import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect } from 'react';
import { useState } from 'react';


import { getTrendingMivies } from 'servise/servise';

const Home = () => {
  const [trendingFilm, setTrendingFilm] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await getTrendingMivies();
        setTrendingFilm(results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <MoviesList trendingFilm={trendingFilm} />
    </div>
  );
};

export default Home;
