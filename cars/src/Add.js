import React from 'react';
import { Link } from 'react-router-dom';
import './add.css';
import videos from './images/v5.mp4';
import Nav from './Nav';

const Add = () => {
  return (
    <>
     <Nav />
    <div className="world-page1">
      <video autoPlay muted loop className="background-video1">
        <source src={videos} type="video/mp4" />
      </video>
      <div className="content1">
        <p className='para4'>Explore our amazing collection of cars.</p>
        <Link to="/booking" className="booking-button1">Book Now</Link>
      </div>
    </div>
    </>
  );
};

export default Add;
