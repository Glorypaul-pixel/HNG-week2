import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { BASE_URL, API_KEY } from "../../constant"
import axios from "axios"
import "./singleMovie.css"
import { AiOutlineHome,AiOutlineDown } from "react-icons/ai"
import { BiCalendar ,   BiCameraMovie } from "react-icons/bi"
import {TfiMenuAlt} from "react-icons/tfi"
import {IoTicketOutline} from "react-icons/io5"
import { TbLogout } from "react-icons/tb"
import {LiaTvSolid} from "react-icons/lia"

export default function SingleMovie() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])  
    const params = useParams()
    // const truncate = (str, n) => {
    //   return str.length > n ? str.substr(0, n-1) + "..." : str
    // }
    
    useEffect(() => {
        const getSingleMovie = async() => {
            axios.get(`${BASE_URL}movie/${params.id}?api_key=${API_KEY}`).then((res)=> {
                if (res.status === 200){
                    setMovies(res.data)
                    console.log(res.data);
                }
                else{
                    setMovies([])
                }
            })
        }

        getSingleMovie()
    }, [params])
        return (
      <div className='MotherBox'>
          <div className="asideBar">
              <div className="blogo">
                <img src="assets/icons/tv.png" alt="tv" />
                 <h3>MovieBox</h3>
              </div>
              <div className="home">
                 <AiOutlineHome />
                 <h4>Home</h4>
              </div>
              <div className="movies">
                  <BiCameraMovie />
                  <h4>Movies</h4>
              </div>
              <div className="tv-series">
                  <LiaTvSolid/>
                  <h4>TV Series</h4>
              </div>
              <div className="upcoming">
                <BiCalendar/>
                <h4>Upcoming</h4>
              </div>
              <div className="sideText">
                  <h5>Play movie quizes and earn free tickets</h5>
                  <h6>
                      50k people are playing now
                  </h6>
                  <button type="submit">Start playing</button>
              </div>
              <div className="logOut">
                  <TbLogout/>
                  <h4>Log out</h4>
              </div>
          </div>
          <div className="mainBar">
             {/* {
              movies?.map((movie, idx) =>(
                <Link to={`/movie/${movie.id}`}>
                   <div className="trailer" key={idx}>
                   <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
              </div>
              <div className="star">
                  <div className="action">
                  <div className="top">
                      <h4>
                      {truncate(movie?.original_title, 20)}
                     </h4>
                     <ul >{movie?.release_date}
                       <li> </li>
                       <li> PG-13</li> 
                       <li> {movie?.time}</li> 
                      </ul>
                  </div>
                
                  <h6> {movie?.genres.name[0]} </h6>
                  <h6>{movie?.genres.name[1]}</h6>
      
                  </div>
                  <div className="rate">
                      <img src="assets/icons/Star.png" alt="Star" />
                      <h4>
                       <span> {movie?.vote_average} </span> | 350k
                      </h4>
                  </div>
              </div>
              <div className="top-shows" >
                  <div className="top-text">
                  <p>
                  {movie?.overview}
                  </p>
                  <br />
                 <p>Director: <span>Joseph Kosinski</span>
                  </p> <br />
                  <p>Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                  </p> <br />
                  <p>Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                  </p> <br /> <br />
      
                  <div className="awards">
                      <div className="nomines">
                      <button type="submit">Top rated movie #65</button> 
                      <p>Awards 9 nominations</p> 
                      </div>
                      <AiOutlineDown/>
                  </div>
                  </div>
                  <div className="showtime">
                    <div className="button2" >
                    <button type="submit">
                          <IoTicketOutline/>
                          See Showtimes
                      </button>
                    </div>
                  <div className="button3">
                  <button type="submit">
                       <TfiMenuAlt/>
                       More watch options
                      </button> </div>
                     
                      <div className="bottom-img">
                          
                      </div>
                  </div>
              </div> 
                </Link>
              ))
             } */}
              <div className="trailer">
                   <img src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`} alt="" width="1098px" height="450px"  style={{borderRadius: "20px" , marginBottom: "6rem"}} />
              </div>
              <div className="star">
                  <div className="action">
                  <div className="top">
                      <h4>
                      {(movies?.original_title)}
                     </h4>
                     <ul>
                       <li> {movies?.released_date}</li>
                       <li> PG-13</li> 
                       <li> 2h 10m</li> 
                      </ul>
                  </div>
                
                  {/* <h6>{movies?.genres.name[0]}</h6>
                  <h6>{movies?.genres.name[1]}</h6> */}
      
                  </div>
                  <div className="rate">
                      <img src="assets/icons/Star.png" alt="Star" />
                      <h4>
                       <span>{movies?.vote_average} </span> | 350k
                      </h4>
                  </div>
              </div>
              <div className="top-shows" >
                  <div className="top-text">
                  <p>
                 {movies?.overview}
                  </p>
                  <br />
                 <p>Director: <span>Joseph Kosinski</span>
                  </p> <br />
                  <p>Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                  </p> <br />
                  <p>Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                  </p> <br /> <br />
      
                  <div className="awards">
                      <div className="nomines">
                      <button type="submit">Top rated movie #65</button> 
                      <p>Awards 9 nominations</p> 
                      </div>
                      <AiOutlineDown/>
                  </div>
                  </div>
                  <div className="showtime">
                    <div className="button2" >
                    <button type="submit">
                          <IoTicketOutline/>
                          See Showtimes
                      </button>
                    </div>
                  <div className="button3">
                  <button type="submit">
                       <TfiMenuAlt/>
                       More watch options
                      </button> </div>
                     
                      <div className="bottom-img">
                          
                      </div>
                  </div>
              </div>
          </div>
          </div>
        )
  
  // return (

  // )
}


