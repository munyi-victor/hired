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
import Dashboard from "./dashboard/Dashboard";
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
