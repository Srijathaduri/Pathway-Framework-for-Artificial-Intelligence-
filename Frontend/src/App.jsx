import React ,{useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home/Home.jsx'
import Basicaiprimer from './primer/Basicaiprimer.jsx'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx'
import ContactUs from './contact/ContactUs.jsx';
import Aboutas from './aboutas/Aboutas.jsx';
import Insites from './Insites/Insites.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  useEffect(() => {
    console.log("Frontend URL:", import.meta.env.VITE_FRONTEND_URL || 'https://pathway-framework-for-artificial.onrender.com'); // Log Frontend URL on mount
  }, []); 
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Navigate to="/anveshakhome" />} />
        <Route path="/anveshakhome" element={<Home />} />
        <Route path="/AIprimer" element={authUser?<Basicaiprimer />:<Navigate to ="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactas" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<Aboutas/>}/>
        <Route path="/insites" element={authUser? <Insites/>:<Navigate to ="/signup"/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

