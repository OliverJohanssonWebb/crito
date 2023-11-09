import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Components/views/Contacts';
import Home from './Components/views/Home';
import NotFound from './Components/views/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />    
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

