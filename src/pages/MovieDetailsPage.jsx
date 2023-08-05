import MoviesDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'servise/servise';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      try {
        const { results } = await getMoviesDetails();
        setMovieDetails(results);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <div>
      <MoviesDetails movieDetails={movieDetails} />
      <ul>
        <li>
            <NavLink to='/cast'>
            Cast
            </NavLink>
            </li>
        <li>
            <NavLink to='/revies'>
            Revies 
            </NavLink>
            </li>
      </ul>
   <Outlet/>
    </div>
  );
};

export default MovieDetailsPage;
