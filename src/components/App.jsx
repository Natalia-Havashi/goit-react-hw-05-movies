import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(()=>import('./Layout/Layout'));
const HomePage = lazy(()=>import('pages/HomePage'));
const MoviesPage = lazy(()=>import('pages/MoviesPage'));
const MovieDetailsPage = lazy(()=>import('pages/MovieDetailsPage'));
const Cast = lazy(()=>import('./Cast/Cast'));
const Revies = lazy(()=>import('./Revies/Revies'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Revies />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

export default App;
