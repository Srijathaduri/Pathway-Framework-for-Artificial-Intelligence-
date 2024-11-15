import React from 'react'
import Navbar from '../components/Navbar'
import AIprimer from '../components/AIprimer'
import Footer from '../components/FooterTemp'; 
function Basicaiprimer() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <AIprimer/>
      </div>
      
      <Footer />

    </>
  )
}

export default Basicaiprimer
