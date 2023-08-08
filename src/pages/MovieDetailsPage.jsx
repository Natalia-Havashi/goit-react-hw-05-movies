import { NavItem, NavList } from 'components/Header/Header.styled';
import MoviesDetails from 'components/MovieDetails/MovieDetails';
import {
  Additional,
  GoBack,
  Information,
} from 'components/MovieDetails/MovieDetails.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <GoBack
        onClick={() => {
          navigate(location.state?.from ?? '/', { replace: true });
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path d="M12 2L4.929 9.071H12V22H16V9.071H23.071L16 2H12ZM12 5.333L14.667 8H9.333L12 5.333Z" />
        </svg>
        Go back
      </GoBack>
      <MoviesDetails />
      <Information>Additional informatio</Information>
      <NavList>
        <NavItem>
          <Additional state={location.state} to="cast">
            Cast
          </Additional>
        </NavItem>
        <NavItem>
          <Additional state={location.state} to="reviews">
            Revies
          </Additional>
        </NavItem>
      </NavList>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
