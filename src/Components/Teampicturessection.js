import React from 'react'
import './Testemonialsection.css'
import Kristine from '../assets/images/Kristine.png'
import Mark from '../assets/images/Mark.png'
import Kimberly from '../assets/images/Kimberly.png'
import Justin from '../assets/images/Justin.png'

const Teampicturessection = () => {
  return (
    <div>
        <section className="Team-pictures">
    <div className="container">
        <div className="Kristine">
            <img src={Kristine} alt="Photo of Kristine Palmer" />
            <h5>Kristine Palmer</h5>
            <p>Cheif Operation Officer</p> 
        </div>

        <div className="Kristine">
            <img src={Mark} alt="Photo of Mark Aubri" />
            <h5>Mark Aubri</h5>
            <p>Senior Consultant</p> 
        </div>

        <div className="Kristine">
            <img src={Kimberly} alt="Photo of Kimberly Hansen" />
            <h5>Kimberly Hansen</h5>
            <p>Senior Consultant</p> 
        </div>

        <div className="Kristine">
            <img src={Justin} alt="Photo of Justin Willoman" />
            <h5>Justin Willoman</h5>
            <p>Senior Tech Consultant</p> 
        </div>
    </div>
<div className="dots">
    <i className="fa-solid fa-circle-dot"></i>
    <i className="fa-regular fa-circle-dot"></i>
    <i className="fa-solid fa-circle-dot"></i>
    <i className="fa-solid fa-circle-dot"></i>
    <i className="fa-solid fa-circle-dot"></i>
</div>
</section>
    </div>
  )
}

export default Teampicturessection