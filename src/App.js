import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Topnav from "./components/Topnav";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import WhyUs from "./components/WhyUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import Reviews from "./components/Reviews";

const App = () => {
  const Home = () => {
    return (
      <div>
        <Topnav />
        <Landing />
        <Clients />
        <About />
        <WhyUs />
        <Footer />
      </div>
    );
  }

  return (
    // <div>
    //   <Topnav />
    //   <Landing />
    //   <Clients />
    //   <About />
    //   <WhyUs />
    //   {/* <Reviews/> */}
    //   <Footer />
    // </div>

    <Router>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
