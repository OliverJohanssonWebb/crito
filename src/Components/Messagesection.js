import React from 'react'

const Messagesection = () => {
  return (
    <div>
        <section className="message-section">
    <div className="container">
    <div className="section-title">
        
    <h2>Leave us a message 
        for any information.</h2>
    </div>
</div>
    <div className="container">           
        <div className="inputs">
        <form className="name-input">
            <input type="text" placeholder="Name*" /> 
        </form>

        <form className="mail-input">
            <input type="text" placeholder="Email*" /> 
        </form>

        <form className="message-input">
            <input type="text" placeholder="Your Message*" /> 
        </form>
    </div>
    </div>
    
    <div className="btn-long">
        <div className="container">
    <a className="btn-yellow" href="login.html">Send Message<i className="fa-solid fa-arrow-turn-up"></i></a>
</div>
</div>
</section>
    </div>
  )
}

export default Messagesection