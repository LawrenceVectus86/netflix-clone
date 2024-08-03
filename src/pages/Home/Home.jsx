import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TittleCards from '../../components/TittleCards/TittleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Turkish drama series available on Netflix. It follows the story of Hakan, a young shopkeeper whose modern world gets turned upside down when he learns he is connected to a secret, ancient order tasked with protecting Istanbul.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TittleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TittleCards title={"Top Movies"} category={"top_rated"} />
      <TittleCards title={"Up Coming Movies"} category={"upcoming"} />
      <TittleCards title={"Popular Movies"} category={"popular"} />
      <TittleCards title={"Now Playing"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
