/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default App;
