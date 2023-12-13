import React from 'react'
import '../Styles/style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a href="#e-design">E-Design</a>
        </li>
        <li className="nav-item">
          <a href="#shop">Shop</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
