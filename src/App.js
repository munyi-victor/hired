import React from "react";

import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topnav from "./components/Topnav";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <div>
        <Topnav/>
        <Landing />
        <Clients />
        <About />
        <Reviews/>
        <Contact />
      </div>

      
    </>
    // <BrowserRouter>
    //     <Topnav />
    //     <Routes>
    //       <Route path="/" element={<Landing />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </BrowserRouter>
  );
};

export default App;
