import React from 'react'
import Logovit from '../assets/images/Logovit.png'

const Footer = () => {
  return (
    <div>
        <section className="footer-section">
<div className="footer">
    <div className="container">
        <div className="logo-lorem">
            <img src={Logovit} alt="Crito Logo white" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat obcaecati voluptas voluptates! 
                Voluptates laborum nam ratione minus 
                necessitatibus, iure praesentium.</p>
        </div>
        <div className="footer-heading company">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
        </div>

        <div className="footer-heading help">
            <h5>Help</h5>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-heading resources">
            <h5>Resources</h5>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">how to - Blog</a>
            <a href="#">Youtube Playlist</a>
        </div>

        <div className="footer-heading link">
            <h5>Link</h5>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
        </div>
    </div>
</div>
<div className="line"></div>
<div className="footer-cr-icon">
    <div className="container">
    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
    <div className="social-media">
        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
</div>
</div>
</section>
    </div>
  )
}

export default Footer