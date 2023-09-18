import "./featureTitle.css"
import { AiOutlineRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import axiosInstance from "../../requests/axios"
import apiRoutes from "../../requests/apiRoutes"
import { GrFavorite } from "react-icons/gr"
import { Link } from "react-router-dom"

export default function FeatureTitle() {

  const [movies, setMovies] = useState([])

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n-1) + "..." : str
  }

  useEffect(() => {
    const getTrending = async () => {
      try {
        const res = await axiosInstance.get(apiRoutes.featured);
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
    <div className="TitleContainer">
<div className="title">
  <h1>Featured Movie </h1>
  <div className="arrow">
    <p>See more
    

    </p>
    <AiOutlineRight/>
  </div>
</div>
<div className="featureMovies">
{  
        movies?.slice(0, 4)?.map((movies, idx) => (
          <Link to={`/movies/${movies.id}`}>
          <div className="movieCard" key={idx}>
            <div className="Poster">
              <img src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`} alt="" />
              <div className="Poster-text">
          <GrFavorite />    
           </div>
            </div>
            <div className="movie-text">
        <div className="usa">
        <p>USA, {movies?.release_date}</p>

        </div>
        <h3>{truncate(movies?.original_title, 20)}</h3>
        <div className="rate-movie">
          <div className="imdb-movie">
            <img src="assets/img/imob.png" alt="imdb" />
            <p>{(movies?.vote_average * 10).toFixed(2)}/100</p>
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
    </div>
  
</div>


  )
}

