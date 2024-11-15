import React from 'react'
import { useNavigate } from 'react-router-dom'; 


function Contact() {
const navigate = useNavigate(); 

const handleCloseModal = () => {
    navigate('/'); 
  };
  return (
 <>
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
      <div className="max-w-md w-full">
        {/* Close Button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none text-white"
          onClick={handleCloseModal}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-white mb-5">Your Name</label>
            <input type="text" id="name" className="input input-bordered w-full" placeholder="Enter your name" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-white  mb-5">Your Email</label>
            <input type="email" id="email" className="input input-bordered w-full" placeholder="Enter your email" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-white  mb-5">Your Message</label>
            <textarea id="message" className="textarea textarea-bordered w-full" rows="4" placeholder="Enter your message"></textarea>
          </div>
          
          <div className="flex justify-center">
            <button type="submit" className="font-normal text-base btn btn-primary w-full text-white">Send Message</button>
          </div>
        </form>
      </div>
    </div>
 </>
  )
}

export default Contact
