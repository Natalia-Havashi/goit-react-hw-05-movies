import MoviesDetails from 'components/MovieDetails/MovieDetails';
import { Link, Outlet,  useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <button
        onClick={() => {
          navigate(location.state?.from ?? '/', { replace: true });
        }}
      >
        Go back
      </button>
      <MoviesDetails />
      <h3>Additional informatio</h3>
      <ul>
        <li>
          <Link state={location.state} to="cast">Cast</Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">Revies</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
