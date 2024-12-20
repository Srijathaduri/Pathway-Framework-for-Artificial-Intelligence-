import React from 'react'

function Banner() {
  return <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
  <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
    <div className='space-y-5'>
    <h className="text-white text-4xl font-bold ">Hello, and welcome! Here begins an exciting journey into  <span className='text-[#BCB88A]'>Artificial Intelligence</span>.</h>
    <p className="text-xl text-white">Dive into resources spanning from foundational concepts to advanced applications, crafted to make AI accessible for learners at every stage. Join us and unlock your AI potential with ease and clarity.</p>
 
    </div>

  </div>
  
  <div className="order-1 w-full mt-10 md:w-1/2 md:mt-20 p-5 flex justify-end items-center ">
  <img src="/homepageimage.webp" className="h-200 w-180 rounded shadow"/>
</div>
  </div>
  </>
}

export default Banner
