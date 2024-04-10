// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
 
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
