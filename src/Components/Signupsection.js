import React from 'react'
import './Signupsection.css'

const Signupsection = () => {
  return (
    <div>
        <section className="signup-section">
    <div className="container">
      <div className="title">
        <h2>Get News Updates By Signup </h2>
      </div>
        <form className="mail-input">
        <input type="text" placeholder="username@domain.com" /> 
        </form>
        <div className="knapp">
        <a className="btn-yellow" href="consulting.html">Subscribe<i className="fa-solid fa-arrow-turn-up"></i></a>
    </div>
</div>
</section>
    </div>
  )
}

export default Signupsection