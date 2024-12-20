import React ,{useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import Basicaiprimer from './primer/Basicaiprimer';
import Signup from './components/Signup';
import Login from './components/login';
import ContactUs from './contact/ContactUs';
import Aboutas from './aboutas/Aboutas';
import Insites from './Insites/Insites';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  useEffect(() => {
    console.log("Frontend URL:", import.meta.env.VITE_FRONTEND_URL); // Log Frontend URL on mount
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

