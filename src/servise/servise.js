import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/3/';
axios.defaults.params = {
  key: '36947214-e67710a045a4cff9982bc6142',
};
export const getTrendingMivies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (query) => {
    try {
      const { data } = await axios.get('search/movie',{params: {query}});
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMoviesDetails = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovieCredits = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}/credits`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovieReviews = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}/reviews`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  


