import Login from './Login.jsx';
import Register from './Register.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import axios from 'axios';

// class App 

function App() {
  return (
    <div className='box' >
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes> 
      </Router>
      </div>
  )
}

export default App
