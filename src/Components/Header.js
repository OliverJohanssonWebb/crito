import React from 'react'
import Logo from '../assets/images/Logo.svg'
const Header = () => {
  return ( 
    <header>
         
    <div className="container">
    <img className="logo" src={Logo} alt=''/>
    <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
    <div className="menu">
        <div className="topmenu">
            <div className="contact">
                <div className="contact-box">
                    <i className="fa-solid fa-phone"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="contact-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="contact-box last">
                        <i className="fa-solid fa-magnifying-glass-location"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="main-menu">
            <nav>
                <a className="active" href="index.html">Home</a>
                <a href="service.html">Service</a>
                <a href="news.html">News</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a className="btn-yellow" href="login.html">Login<i className="fa-solid fa-arrow-turn-up"></i></a>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header