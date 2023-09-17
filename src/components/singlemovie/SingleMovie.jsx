import React from 'react'
import { useParams } from 'react-router-dom'
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
    
    useEffect(() => {
        const getSingleMovie = async() => {
            axios.get(`${BASE_URL}movie/${params.id}?api_key=${API_KEY}`)
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
              <div className="trailer">
                  <img src="assets/img/trailer.png" alt="trailer video" />
              </div>
              <div className="star">
                  <div className="action">
                  <div className="top">
                      <h4>
                       Top Gun: Maverick    
                     </h4>
                     <ul>
                       <li> 2022</li>
                       <li> PG-13</li> 
                       <li> 2h 10m</li> 
                      </ul>
                  </div>
                
                  <h6>Action</h6>
                  <h6>Drama</h6>
      
                  </div>
                  <div className="rate">
                      <img src="assets/icons/Star.png" alt="Star" />
                      <h4>
                       <span> 8.5</span> | 350k
                      </h4>
                  </div>
              </div>
              <div className="top-shows" >
                  <div className="top-text">
                  <p>
                  After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                  but must confront ghosts of his past when he leads TOP GUN's elite graduates
                  on a mission that demands the ultimate sacrifice from those chosen to fly it.
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
