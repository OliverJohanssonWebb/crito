import React from 'react'
import Star from '../assets/images/Star.png'
import Cassandra from '../assets/images/Cassandra.png'
import Amanda from '../assets/images/Amanda.png'
import Jack from '../assets/images/Jack.png'



const Testemonialsection = () => {
  return (
    <div>
        <section className="testimonial-section">
    <div className="container">
        <div className="section-title-center">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
        </div>
    <div className="reviews">
        <div className="Cassandra">
            <img src={Star} alt="a five star rating" />
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                 dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                 <div className="customer">
                    <img src={Cassandra} alt="Cassandras profile picture" /> 
                <div className="content">
                    <h5>Cassandra Warrem</h5>
                    <p>Business Manager, Dorfus</p>
                </div>
            </div>
        </div> 
            
            <div className="Cassandra">
                <img src={Star} alt="A man reading a paper" />
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                     dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                     <div className="customer">
                        <img src={Amanda} alt="Amandas profile picture" /> 
                    <div className="content">
                        <h5>Amanda Tulling</h5>
                        <p>Senior Developer, Square</p>
                    </div>
                </div>
            </div> 

            <div className="Cassandra">
                <img src={Star} alt="A man reading a paper" />
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                     dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="customer">
                    <img src={Jack} alt="Jacks profile picture" /> 
                    <div className="content">
                    <h5>Jack McDogglas</h5>
                <p>Key Account Manager, Gobona</p>
            </div>
        </div>
    </div> 
</div>
    <div className="knapp">
    <a className="btn-black" href="Projects.html">All Reviews<i className="fa-solid fa-arrow-turn-up"></i></a>
</div>
</div>
</section>
    </div>
  )
}

export default Testemonialsection