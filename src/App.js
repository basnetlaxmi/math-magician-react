/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quotes';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
