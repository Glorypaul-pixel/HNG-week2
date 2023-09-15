import "./header.css"
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { BASE_URL, API_KEY } from "../../constant"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Header() {
  const navigate = useNavigate()

  const [searchparams, setSearchParams] = useState("")

  const handleChange = (e) => {
    setSearchParams(e.target.value)
  }

  const onSearchFunc = async() => {
    const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchparams}`)
    if(res.status === 200) {
      navigate("/result", {
        state: res.data.results
      })
    }
  }
  return (
    <div className="Header">
      <div className="navBar">
    <div className="Logo">
    <img src="assets/icons/tv.png" alt="tv" />
    <h3>
      MovieBox
    </h3>
    </div>
    <div className="Search">
      <input type="search" placeholder="What do you want to watch?" onChange={handleChange} value={searchparams} />
      <AiOutlineSearch onClick={onSearchFunc}/>
    </div>
   <div className="Menu">
    <h4>Sign in</h4>
    <AiOutlineMenu/>
   </div>
    </div>
      
    <div className="navBody">
      <div className="DescriptionBox">
      <div className="navBodyIcon">
        <h1>John Wick 3: <br /> Parabellum</h1>
        <div className="Rating">
          <div className="IMDB">
          <img src="assets/img/imob.png" alt="imob" />
          <p>86.0 / 100</p>
          </div>
          <div className="RottenTomatoes">
          <img src="assets/icons/tomatoes.png" alt="" />
          <p>97%</p>
          </div>
        </div>
      </div>
      <div className="JohnWick-text">
      <p>
      John Wick is on the run after kilpng a member <br /> of the international assassins'guild, and with <br /> a $14milpon price tag on his head, he is the <br /> target of hit men and women everywhere.
      </p>
      </div>
      <div className="Button">
      <img src="assets/icons/Button.png" alt="" />
      </div>
      </div>
     <div className="Pagination">
        <p>1</p>
        <p>2</p>
        <div className="three">
          <hr />
        <h4>3</h4>
        </div>          
        <p>4</p>
        <p>5</p>
     </div>

    </div>
  </div>
  )
}
