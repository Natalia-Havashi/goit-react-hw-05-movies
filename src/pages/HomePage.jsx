import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMivies } from 'servise/servise';

const Home = () => {
  const [trendingFilm, setTrendingFilm] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const data = await getTrendingMivies();
        setTrendingFilm(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <ul>
        {trendingFilm.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
