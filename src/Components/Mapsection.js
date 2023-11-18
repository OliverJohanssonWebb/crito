import React from 'react'
import './Mapsection.css'
import Map from '../assets/images/Map.png'
const Mapsection = () => {
  return (
    <div>
        <section className="map-section">
    <img src={Map} alt="location map" />
</section>
    </div>
  )
}

export default Mapsection