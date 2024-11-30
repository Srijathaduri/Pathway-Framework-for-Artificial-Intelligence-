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
      <div className='mt-10'>
      <Footer />
      </div>
     

    </>
  )
}

export default Basicaiprimer
