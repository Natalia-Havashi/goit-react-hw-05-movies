import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '393e19defb9f3dee2fc96da932bb4d41',
};
export const getTrendingMivies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (query) => {
    try {
      const { data } = await axios.get('search/movie',{params: {query}});
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMoviesDetails = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovieCredits = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}/credits`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  

  export const getMovieReviews = async (movieId) => {
    try {
      const { data } = await axios.get(`movie/${movieId}/reviews`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  


