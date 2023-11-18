import React from 'react'
import './Showcaseconnect.css'
import Bgbild2 from '../assets/images/bgbild2.png'
const Showcaseconnect = () => {
  return (
    <div>
         <section className="showcase-connect">      
        <div className="container">            
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Contact</a>
            </div>
            <div className="title">
                <h1>Let's Connect</h1>
            </div>  
            <img src={Bgbild2} alt="#" />  
        </div> 
    </section>           
</div>
   
  );
}

export default Showcaseconnect