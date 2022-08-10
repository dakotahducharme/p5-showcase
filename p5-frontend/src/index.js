import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import { Route, Routes } from 'react-router';
import reportWebVitals from './reportWebVitals';
import Sketch1 from './routes/Sketch1';
import Sketch2 from './routes/Sketch2';
import Sketch3 from './routes/Sketch3';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sketch1" element={<Sketch1 />} />
      <Route path="/sketch2" element={<Sketch2 />} />
      <Route path="/sketch3" element={<Sketch3 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
