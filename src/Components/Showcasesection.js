import React from 'react'
import showcaseImage from '../assets/images/Showcase.png'
import './Showcasesection.css'
const Showcasesection = () => {
  return (
    <div>
        <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="/Contacts">Get Consulting<i className="fa-solid fa-arrow-turn-up"></i></a>
                <a className="btn-transparent" href="Services.html">Learn More<i className="fa-solid fa-arrow-turn-up"></i></a>
            </div>
            <img src={showcaseImage} alt="" />
        </div>
    </section>
    </div>
  )
}

export default Showcasesection