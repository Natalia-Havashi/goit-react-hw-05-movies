import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'servise/servise';
import PropTypes from 'prop-types';
import {
  MovieDetails,
  MovieImg,
  Box,
  Name,
  Overview,
  Details,
} from './MovieDetails.styled';

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
    <Box>
      <MovieImg
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        alt=""
      />
      <MovieDetails>
        <Name>{movieDetails.original_title}</Name>

        <Overview>Overview</Overview>
        <Details>{movieDetails.overview}</Details>
        <Overview>Genres</Overview>

        <Details>
          {movieDetails.genres
            ? movieDetails.genres.map(genre => genre.name).join(',')
            : ''}
        </Details>

        <Details>Release date: {movieDetails.release_date}</Details>
      </MovieDetails>
    </Box>
  );
};

MoviesDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default MoviesDetails;
