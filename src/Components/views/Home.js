import React from 'react'
import Header from '../Header'
import Showcasesection from '../Showcasesection'
import SponsorImages from '../Sponsorimages'
import Partnerborder from '../Partnerborder'
import Aboutcompanysection from '../Aboutcompanysection'
import Serviceandconsultingsection from '../Serviceandconsultingsection'
import Agencysection from '../Agencysection'
import Projectandcasesection from '../Projectandcasesection'
import Teammembersection from '../Teammembersection'
import Teampicturessection from '../Teampicturessection'
import Testemonialsection from '../Testemonialsection'
import Articleandnewssection from '../Articleandnewssection'
import Signupsection from '../Signupsection'
import Footer from '../Footer'



const Home = () => {
  return (
    <div className="wrapper">
    <Header /> 
    <Showcasesection />
    <SponsorImages />
    <Partnerborder />
    <Aboutcompanysection />
    <Serviceandconsultingsection />
    <Agencysection />
    <Projectandcasesection />
    <Teammembersection />
    <Teampicturessection />
    <Testemonialsection />
    <Articleandnewssection />
    <Signupsection />
    <Footer />
    </div>
  )
}

export default Home