import React from 'react';
import AIinsites from '../components/AIinsites';
import Footer from '../components/FooterTemp'; 
import Navbar from '../components/Navbar';

function Insites() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <AIinsites/>
      </div>
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default Insites
