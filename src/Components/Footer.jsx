import React from 'react'
import footerImg from "../assets/DH.png"
import facebookImg from "../assets/ico-facebook.png"
import instagramImg from "../assets/ico-instagram.png"
import tiktokImg from "../assets/ico-tiktok.png"
import wspImg from "../assets/ico-whatsapp.png"


const footerImage = {
  maxWidth: '200px',
  padding: "0.8rem",
  justifyContent: "center",
  margin: 0,
}

const footerImgRedes = {
  maxWidth: '20px', 
  marginRight: '10px'
}

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        {/* <img src="public/images/DH.png" alt='DH-logo' /> */}
        <img src={footerImg} alt='DH-logo' style={footerImage}/>

        <div>
          <img className="social-media" src={facebookImg} alt="Facebook-logo" style={footerImgRedes} />
          <img className="social-media" src={instagramImg} alt="Instagram-logo" style={footerImgRedes} />
          <img className="social-media" src={tiktokImg} alt="TikTok-logo" style={footerImgRedes} />
          <img className="social-media" src={wspImg} alt="Whatsapp-logo" style={footerImgRedes} />  
        </div>
    </footer>
  )
}

export default Footer
