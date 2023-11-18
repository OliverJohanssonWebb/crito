import React from 'react'
import './Sponsorimages.css'
import Paperz from '../assets/images/Paperz.png'
import Dorfus from '../assets/images/Dorfus.png'
import Martino from '../assets/images/Martino.png'
import Square from '../assets/images/Square.png'
import Gobana from '../assets/images/Gobana.png'
const SponsorImages = () => {
  return (
    <div>
    <div className="sponsors-images">
    <div className="container">
        <img src={Paperz}  alt="" />
        <img src={Dorfus} alt="Dorfus logo" />
        <img src={Martino} alt="Martino logo" />
        <img src={Square} alt="Square logo" />
        <img src={Gobana} alt="Gobana logo" />
    </div>
</div>
</div>
  )
}

export default SponsorImages