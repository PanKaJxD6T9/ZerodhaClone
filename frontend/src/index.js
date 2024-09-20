import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import About from './landing_page/about/About';
import Product from './landing_page/product/Product';
import PricingPage from './landing_page/pricing/PricingPage';
import SignUp from './landing_page/signup/SignUp';
import Support from './landing_page/support/Support';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Product />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/support' element={<Support />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);