import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Authprovider from './context/Authprovider.jsx';

const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'https://pathway-framework-for-artificial.onrender.com';
console.log("Frontend URL:", frontendUrl);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter future={{ v7_relativeSplatPath: true }}>
  <Authprovider>
  <div className=' dark:bg-slate-900 dark:text-white'>
      <App />
  </div>
  </Authprovider>
 
  </BrowserRouter>
  </React.StrictMode>

  
);
