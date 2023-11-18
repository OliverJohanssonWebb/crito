import React from 'react'
import './Serviceandconsultingsection.css'
const Serviceandconsultingsection = () => {
  return (
    <div>
        <section className="Service-and-consulting">
    <div className="container">
        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>
    <div className="consulting">
        <div className="business">
            <h5>Business Advice</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <div className="knapp">
            <a className="btn" href="#"><i className="fa-solid fa-arrow-right"></i></a>
        </div>
        </div>
        <div className="startup">
            <h5>Startup Business</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <div className="knapp">
                <a className="btn" href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        <div className="financial">
            <h5>Financial Business</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <div className="knapp">
                <a className="btn" href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        <div className="risk">
            <h5>Risk Management</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <div className="knapp">
                <a className="btn" href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
    <div className="center-content">
        <a className="btn-transparent" href="Projects.html">Browse Services<i className="fa-solid fa-arrow-turn-up"></i></a>
    </div>
</section>
</div>
  )
}

export default Serviceandconsultingsection