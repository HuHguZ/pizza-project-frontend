import React from 'react'
import './style.css'
import instagramLogo from './instagram.png'
import facebookLogo from './facebook.png'
import telegramLogo from './telegram.png'
import twitterLogo from './twitter.png'
import vkLogo from './vk.png'


const Footer = () => 
    <footer className="footer">
        <div className="footer-text">Мы в социальных сетях</div>
        <div className="social-media">
            <img src={instagramLogo} alt="" className="social-media-icon" />
            <img src={facebookLogo} alt="" className="social-media-icon" />
            <img src={telegramLogo} alt="" className="social-media-icon" />
            <img src={twitterLogo} alt="" className="social-media-icon" />
            <img src={vkLogo} alt="" className="social-media-icon" />
        </div>
    </footer>;

export default Footer