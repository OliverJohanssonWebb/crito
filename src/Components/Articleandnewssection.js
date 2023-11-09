import React from 'react'
import Classroom from '../assets/images/Classroom.png'
import Projects from '../assets/images/projects.png'
import Design from '../assets/images/Design.png'

const Articleandnewssection = () => {
  return (
    <div>
        <section className="article-news-section">
    <div className="container">
        <div className="section-title">
            <p>Article & News</p>
            <h2>Get Every Single Articles & News</h2>
        </div>
    <div className="knapp">
        <a className="btn-transparent" href="Projects.html">Browse Articles<i className="fa-solid fa-arrow-turn-up"></i></a>
    </div>
    </div>
</section>

<section className="article-and-news">
    <div className="container">
        <div className="articles">
        <article>
            <img src={Classroom} alt="a person sitting infront of a classroom" />
            <p>Business</p>
            <h5>How To Use Digitalization 
                In The Classroom</h5>
            <p>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Architecto sed hic libero.</p>
        </article>

        <article>
            <img src={Projects} alt="a picture of a computer screen with diffrent topics" />
            <p>Business</p>
            <h5>How To Implement Chat GPT
                In Your Projects</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </article>

        <article>
            <img src={Design} alt="A stack of two books and a mobile phone" />
            <p>Business</p>
            <h5>The Guide To Support 
                Modern CSS Design</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </article>
    </div>
</div>
</section>
    </div>
  )
}

export default Articleandnewssection