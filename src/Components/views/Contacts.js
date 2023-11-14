import React from 'react'
import Header from '../Header'
import Showcaseconnect from '../Showcaseconnect'
import Visitmailsection from '../Visitmailsection'
import Messagesection from '../Messagesection'
import Mapsection from '../Mapsection'
import Footer from '../Footer'

const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcaseconnect />
      <Visitmailsection />
      <Messagesection />
      <Mapsection />
      <Footer /> 
    </div>
  )
}

export default Contacts