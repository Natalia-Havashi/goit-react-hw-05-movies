import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'servise/servise';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMoviesDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt=""
        />
        <h2>{movieDetails.original_title}</h2>

        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>

        <p>
          {movieDetails.genres
            ? movieDetails.genres.map(genre => genre.name).join(',')
            : ''}
        </p>

        <p>Release date: {movieDetails.release_date}</p>
      </div>
    </div>
  );
};

export default MoviesDetails;
