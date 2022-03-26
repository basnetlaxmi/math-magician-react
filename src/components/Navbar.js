import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="menu">

      <div>
        <h1>Math Magician</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
