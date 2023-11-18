import React from 'react'
import './Projectandcasesection.css'
import Grow from '../assets/images/Grow.png'
import Responsive from '../assets/images/Responsive.png'
import Results from '../assets/images/Results.png'
import Insight from '../assets/images/insight.png'
const Projectandcasesection = () => {
  return (
    <div>
        <section className="project-and-case-section">
    <div className="container">
        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
            <article>
                <img src={Grow} alt="A man reading a paper" />
                <h3>Grow your business</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-turn-up"></i></a>
            </article>

            <article>
                <img src={Responsive} alt="Pink apple products" />
                <h3>Why your client needs a responsive website</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-turn-up"></i></a>
            </article>

            <article>
                <img src={Results} alt="Desk with supplies" />
                <h3>Educate your employees to get better results</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-turn-up"></i></a>
            </article>

            <article>
                <img src={Insight} alt="Laptop with intelligence insights" />
                <h3>Business insights is a important piece of your business</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-turn-up"></i></a>
            </article>
        </div>
        <div className="center-content">
        <a className="btn-transparent" href="Projects.html">All Recent Projects <i className="fa-solid fa-arrow-turn-up"></i></a>
    </div>
    </div>
</section>
    </div>
  )
}

export default Projectandcasesection