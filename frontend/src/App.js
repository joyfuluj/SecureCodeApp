import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Analyze from './components/Analyze';
import Fix from './components/Fix';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />   
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/fix" element={<Fix />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;