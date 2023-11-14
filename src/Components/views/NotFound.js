import React from 'react'
import '../NotFound.css'
import Header from '../Header'
import Footer from '../Footer'
import Notfoundgoblins from '../Notfoundgoblins'
const NotFound = () => {
  return (
    <div>
        <Header />
        <h1>Page not found. Our goblins are working on it.</h1>
        <Notfoundgoblins />
        <Footer />
    </div>
  )
}

export default NotFound