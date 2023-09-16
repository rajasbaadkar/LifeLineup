import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Navbar from './containers/navbar/Navbar';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home/Home';
import DonateOrgan from 'containers/donateOrgan/donateOrgan';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';
import UserProfile from './containers/UserProfile/UserProfile';
import WebChat from './containers/WebChat/WebChat';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/chat" element={<WebChat />} />
        <Route path="/donateOrgan" element={<DonateOrgan/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
