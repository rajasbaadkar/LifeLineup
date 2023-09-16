import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Navbar from './containers/navbar/Navbar';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import Register from './containers/Register/Register';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
