import { useLocation } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";

const SearchResult = () => {
  const location = useLocation();
  const movies = location.state || [];

  const truncate = (str, n) => {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="featureMovies">
      {movies?.slice(0, 4)?.map((movie, idx) => (
        <div className="movieCard" key={idx}>
          <div className="Poster">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt=""
            />
            <div className="Poster-text">
              <GrFavorite />
            </div>
          </div>
          <div className="movie-text">
            <div className="usa">
              <p>USA, {movie?.release_date}</p>
            </div>
            <h3>{truncate(movie?.original_title, 20)}</h3>
            <div className="rate-movie">
              <div className="imdb-movie">
                <img src="assets/img/imob.png" alt="imdb" />
                <p>{(movie?.vote_average * 10).toFixed(2)}/100</p>
              </div>
              <div className="tomatoes">
                <img src="assets/icons/tomatoes.png" alt="" />
                <p>97%</p>
              </div>
            </div>
            <p>Action, Adventure, Horror</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
