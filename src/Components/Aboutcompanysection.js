import React from 'react'
import Samantha from '../assets/images/Samantha.png'
const Aboutcompanysection = () => {
  return (
    <div>
    <section className="about-company-section">
    <div className="container">
        <div className="bild">
            <img src={Samantha} alt="Picture of Samantha Brown the founder walking with a laptop and smiling" />
        </div>
        <div className="section-title-button">
            <div className="section-title-about">
            <p>About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
        </div>
            <div className="text-line"><p>lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates 
                 iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Omnis esse quasi incidunt adipisci accusantium libero provident
                  voluptate amet.</p></div>
                <div className="knappar">
                  <a className="btn-black" href="consulting.html">Learn more<i className="fa-solid fa-arrow-turn-up"></i></a>
                  <a className="btn" href="#"><i className="fa-solid fa-play"></i></a>
                  <p>Intro Video</p>
                </div>
            </div>   
        </div>    
    <div className="block border">
    <div className="title">
        <h5>Samantha Brown,</h5>
        <p>Founder</p>
    </div>
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
</div>
</section></div>
  )
}

export default Aboutcompanysection