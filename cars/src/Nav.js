import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import logo from './logo2.png';


const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
      <div>
        <header className="sticky">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul>
            <li><Link to="/">DashBoard</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/Admin">Admin</Link></li>

          </ul>
        </header>
      </div>
    );
    
};

export default Nav;
