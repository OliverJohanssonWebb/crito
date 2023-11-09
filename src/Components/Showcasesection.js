import React from 'react'
import showcaseImage from '../assets/images/Showcase.png'
const Showcasesection = () => {
  return (
    <div>
        <section className="showcase">
        <div className="container">
            <div class="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a class="btn-yellow" href="consulting.html">Get Consulting<i class="fa-solid fa-arrow-turn-up"></i></a>
                <a class="btn-transparent" href="Services.html">Learn More<i class="fa-solid fa-arrow-turn-up"></i></a>
            </div>
            <img src={showcaseImage} alt="" />
        </div>
    </section>
    </div>
  )
}

export default Showcasesection