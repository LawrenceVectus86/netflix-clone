// import React from 'react'
import './Footer.css'
import youtube_icons from '../../assets/youtube_icon.png'
import twitter_icons from '../../assets/twitter_icon.png'
import instagram_icons from '../../assets/instagram_icon.png'
import facebook_icons from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icons} alt="" />
        <img src={twitter_icons} alt="" />
        <img src={facebook_icons} alt="" />
        <img src={instagram_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Helper</li>
        <li>Media Center</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>CopyRight 2024</li>
      </ul>
      <p className='copy'>@1990 - 2024 Netflix, Inc</p>
    </div>
  )
}

export default Footer
