import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <div><img src="assets/icons/fa-brands_facebook-square.png" alt="" /></div>
            <div>
                <img src="assets/icons/vector2.png" alt="" /> 
            </div>
            <div> <img src="assets/icons/vector1.png" alt="" /> </div>
          
            <div> <img src="assets/icons/fa-brands_youtube.png" alt="" /> </div>
        </div>
        <div className="policy">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p>&copy;2021 MovieBox by Adriana Eka Prayudha </p>
    
    </div>
  )
}
