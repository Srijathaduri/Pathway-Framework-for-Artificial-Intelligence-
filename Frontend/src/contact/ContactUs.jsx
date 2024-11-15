import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function ContactUs() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
<Contact theme={theme} />

   </div>

   </>
  )
}

export default ContactUs
