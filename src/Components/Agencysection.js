import React from 'react'
import whyChooseUs from '../assets/images/whychooseus.png'
const Agencysection = () => {
  return (
    <div>
        <section className="agency-section">
    <div className="section-title">
    </div>
<div className="container">    
    <div className="icons-and-text">
        <div className="section-title">
            <p>Why Choose us</p>
            <h2> Why We Are The Best Business Consulting Agency</h2>
        </div>
        <div className="exellence">
            <i className="fa-solid fa-thumbs-up"></i>
        <div className="content">
            <h5>Process Excellence</h5>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
        <div className="strategic">
            <i className="fa-solid fa-chess"></i>
        <div className="content">
            <h5>Strategic Planning</h5>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
        <div className="experience">
            <i className="fa-solid fa-pen-nib"></i>
        <div className="content">
            <h5>Experience Design</h5>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
        <div className="artificial">
            <i className="fa-solid fa-brain"></i>
        <div className="content">
            <h5>Artificial Inteligence</h5>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </div>   
</div>
<div className="bild">
    <img src={whyChooseUs} alt="two people sitting at a table and talking" />

    </div>
</div>
</section>
    </div>
  )
}

export default Agencysection