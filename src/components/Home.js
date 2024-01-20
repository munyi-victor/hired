import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Contact';
import Landing from './Landing';
import Topnav from "./Topnav";
import About from "./About";

const Home = () => {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
