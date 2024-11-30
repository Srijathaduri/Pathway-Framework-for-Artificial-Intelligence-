import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner'; 
import Footer from '../components/FooterTemp'; 
import AIHub from '../components/AIHub';
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AIHub/>
      <div className='mt-10'>
      <Footer />
      </div>
      
      
    </>
  );
}

export default Home
