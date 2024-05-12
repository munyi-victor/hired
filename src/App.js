import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import { GlobalStyles } from "./styles/App.styles";

import { AuthProvider } from "./auth/AuthContext";

import Topnav from "./components/Topnav";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import WhyUs from "./components/WhyUs";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Reviews from "./components/Reviews";

import Dashboard from "./dashboard/Dashboard";
import PostJob from "./dashboard/PostJob";
import FindJobs from "./dashboard/FindJobs";
import JobDetails from "./dashboard/JobDetails";
import ApplyJob from "./dashboard/ApplyJob";
import Profile from "./dashboard/Profile";

const App = () => {
  const Home = () => {
    return (
      <div>
        <Topnav />
        <Landing />
        <Clients />
        <About />
        <WhyUs />
        <Reviews/>
        <Footer />
      </div>
    );
  }

  return (
    <AuthProvider>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="login" Component={Login} />
          <Route path="signup" Component={Signup} />
          <Route path="/" Component={Home} />

          <Route exact path="dashboard" Component={Dashboard} />
          <Route path="/dashboard/post-job" Component={PostJob} />
          <Route path="/dashboard/find-jobs" Component={FindJobs} />
          <Route path="/dashboard/:id" Component={JobDetails} />
          <Route path="/dashboard/apply" Component={ApplyJob} />
          <Route path="/dashboard/profile" Component={Profile} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
