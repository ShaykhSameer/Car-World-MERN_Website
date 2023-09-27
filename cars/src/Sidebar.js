// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './logo2.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/cars" className="menu-item">Cars</Link>
      <Link to="/booking" className="menu-item">Booking</Link>
      <Link to="/help" className="menu-item">Help</Link>
      <Link to="/team" className="menu-item">Team</Link>
    </div>
  );
};

export default Sidebar;
