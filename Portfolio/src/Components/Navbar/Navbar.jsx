import React from 'react';
import './Navbar.css';
import logo from '../../assets/ashir.jpg';  // Correct logo path

const Navbar = () => {
  return (
    <nav className='navbar'>
     <img src={logo} alt="Logo" style={{ height: '100px', width: '110px' }} />
  {/* Logo with class for styling */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </nav>
  );
};

export default Navbar;
