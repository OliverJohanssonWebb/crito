import React from 'react'

const Visitmailsection = () => {
  return (
    <div>
        <section className="contact-visit-mail-section">
    <div className="container">
        <div className="visit border">
            <div className="knapp border">
            <a className="btn" href="#"><i className="fa-solid fa-location-dot"></i></a>
            </div>
            <div className="content">
            <h5>Visit us</h5>
            <p>Sveavägen 31
            111 34 STOCKHOLM</p>
        </div>
    </div>
        <div className="visit border">
            <div className="knapp border">
            <a className="btn" href="#"><i className="fa-solid fa-phone"></i></a>
            </div>
            <div className="content">
            <h5>call us</h5>
            <p>+46 (8) 121 470 50</p>
            <p>+46 (8) 121 470 51</p>
        </div>
    </div>
        <div className="visit border">
            <div className="knapp border">
            <a className="btn" href="#"><i className="fa-solid fa-envelope"></i></a>
            </div>
            <div className="content">
            <h5>Email us</h5>
            <p>info@crito.com</p>
            <p>support@crito.com</p>
        </div>
        </div>     
    </div>
</section>
    </div>
  )
}

export default Visitmailsection