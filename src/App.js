import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Dependencies/Navbar/Navbar';
import Mainbody from './Dependencies/Mainbody/Mainbody';

function App() {
  return (
    <Router>
      <Navbar/>
      <Mainbody/>
    </Router>
  );
}

export default App;
