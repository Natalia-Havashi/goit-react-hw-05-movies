import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from './Cast/Cast';
import Revies from './Revies/Revies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='revies' element={<Revies />}/>
          </Route>
      </Route>
      <Route path='*' element={<Layout />}/>
    </Routes>
  );
};

export default App
