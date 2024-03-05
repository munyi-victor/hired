import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import { AuthProvider } from "./auth/AuthContext";

import Topnav from "./components/Topnav";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import WhyUs from "./components/WhyUs";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";
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

  const MainDashboard = () => {
    return (
      <div>
        <Topnav />
        <Dashboard/>
      </div>
    )
  }
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" Component={MainDashboard} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
