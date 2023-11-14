import React from 'react'
import Header from '../Header'
import Showcaseconnect from '../Showcaseconnect'
import Visitmailsection from '../Visitmailsection'

import Mapsection from '../Mapsection'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcaseconnect />
      <Visitmailsection />
      <ContactForm />
      <Mapsection />
      <Footer /> 
    </div>
  )
}

export default Contacts