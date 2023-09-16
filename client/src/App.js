import React from 'react';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import Login from './containers/Login/Login';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
// import {Footer} from 'containers/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
