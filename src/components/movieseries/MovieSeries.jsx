import "./movieSeries.css"
import { useEffect, useState } from "react"
import axiosInstance from "../../requests/axios"
import apiRoutes from "../../requests/apiRoutes"
// import { BASE_URL } from "../../constant"
import { GrFavorite } from "react-icons/gr"
import { Link } from "react-router-dom"

export default function MovieSeries() {
  const [movies, setMovies] = useState([])

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n-1) + "..." : str
  }

  useEffect(() => {
    const getTrending = async () => {
      try {
        const res = await axiosInstance.get(apiRoutes.trending);
        if(res?.status === 200 || res?.status === 201) {
          setMovies(res?.data?.results)
        } else {
          setMovies([])
        }
      } catch (error) {
        throw error
      }
    }

    getTrending()
  }, [])
  return (
    <div className="MovieSeries">
      {
        movies?.slice(0, 10)?.map((movie, idx) => (
          <Link to={`/movie/${movie.id}`}>
          <div className="movieCard" key={idx}>
            <div className="Poster">
              <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
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
          </Link>
          
        ))
      }
    {/* <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/stranger.png" alt="" />
       <div className="Poster-text">
       <img src="assets/icons/tvSeries.png" alt="tvSeries" />
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />  
       </div> 
      </div>
      <div className="movie-text">
        <div className="usa">
        <p>USA, 2016 - Current</p>

        </div>
        <h3>Stranger Things</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>86.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>97%</p>
          </div>
        </div>
        <p>Action, Adventure, Horror</p>
      </div>
    </div> */}
    {/* <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/batman.png" alt="" />
       <div className="Poster-tex" >
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2005</p>
        </div>
        <h3>Batman Begins</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>82.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>70%</p>
          </div>
        </div>
        <p>Action, Adventure</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/spiderman.png" alt="" />
       <div className="Poster-te">
       
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2018</p>

        </div>
        <h3>Spider-Man: Into The Spider <br /> Verse</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>84.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>87%</p>
          </div>
        </div>
        <p>Animation, Action, Adventure</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/dunkir.png" alt="" />
       <div className="Poster-t">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2017</p>

        </div>
        <h3>Dunkirk</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>78.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>94%</p>
          </div>
        </div>
        <p>Action, Drama, History</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/dune.png" alt="" />
       <div className="Poster-">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2021</p>

        </div>
        <h3>Dune</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>84.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>75%</p>
          </div>
        </div>
        <p>Action, Adventure, Drama</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/noTime.png" alt="" />
       <div className="Poste--">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p>USA, 2021</p>

        </div>
        <h3>No Time To Die</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>76.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>68%</p>
          </div>
        </div>
        <p>Action, Adventure, Thriller</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/shang-chi.png" alt="" />
       <div className="Poste">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2021</p>

        </div>
        <h3>Shang-Chi and the Legend <br /> of the Ten Rings</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>79.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>71%</p>
          </div>
        </div>
        <p>Action, Adventure, Thriller</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/breathe.png" alt="" />
       <div className="Post">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2021</p>

        </div>
        <h3>Dont't Breathe 2</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>61.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>46%</p>
          </div>
        </div>
        <p>Action, Drama, Horror</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/dune.png" alt="" />
       <div className="Pos">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2021</p>

        </div>
        <h3>Dune</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>84.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>75%</p>
          </div>
        </div>
        <p>Action, Adventure, Drama</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/noTime.png" alt="" />
       <div className="Postext">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p className="usa">USA, 2021</p>

        </div>
        <h3>No Time To Die</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>76.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>68%</p>
          </div>
        </div>
        <p>Action, Adventure, Thriller</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/shang-chi.png" alt="" />
       <div className="Postext-">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <p className="usa">USA, 2021</p>
        <h3>Shang-Chi and the Legend <br /> of the Ten Rings</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>79.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>71%</p>
          </div>
        </div>
        <p>Action, Adventure, Thriller</p>
      </div>
    </div>
    <div className="MovieCard">
      <div className="Poster">
        <img src="assets/img/breathe.png" alt="" />
       <div className="Postexter">
          <img src="assets/icons/Favorite.png" alt="favoriteIcon" />
          
       </div>
        
      </div>
      <div className="movie-text">
        <div className="usa">
        <p>USA, 2021</p>
        </div>
        
        <h3>Dont't Breathe 2</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>61.0 / 100</p>
          </div>
          <div className="tomatoes">
            <img src="assets/icons/tomatoes.png" alt="" />
            <p>46%</p>
          </div>
        </div>
        <p>Action, Drama, Horror</p>
      </div>
    </div> */}
  </div>
  )
}
