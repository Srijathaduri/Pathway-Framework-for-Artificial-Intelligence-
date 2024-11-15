import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import Basicaiprimer from './primer/Basicaiprimer';
import Signup from './components/Signup';
import Login from './components/login';
import ContactUs from './contact/ContactUs';
const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AIprimer" element={<Basicaiprimer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactas" element={<ContactUs/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

