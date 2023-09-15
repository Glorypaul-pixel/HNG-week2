import { API_KEY } from "../constant";

const trending = `/trending/movie/week?api_key=${API_KEY}`;
const searchmovies = `/search/movie?api_key=${API_KEY}`;
const singlemovie = `/find?api_key=${API_KEY}`;
const featured = `/movie/popular?api_key=${API_KEY}`;

const apiRoutes = {
  trending,
  searchmovies,
  singlemovie,
  featured,
};

export default apiRoutes;
