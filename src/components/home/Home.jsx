import MovieSeries from "../movieseries/MovieSeries"
import "./home.css"
import FeatureTitle from "../feature/FeatureTitle"
import Header from "../header/Header"
import Footer from "../footer/Footer"
export default function Home() {
  return (
    <div className="Homepage">
        <Header/>
        <FeatureTitle/>   
        <MovieSeries/>    
        <Footer/>
    </div>
  )
}

