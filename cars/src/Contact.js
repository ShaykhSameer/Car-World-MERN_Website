import React from 'react';
import './contact.css'; 
import video from './images/v3.mp4';

import Nav from './Nav';
import Footer from './Footer';

function Contact() {
  return (
    <>

<Nav/>


       
<div className="home-page1">
          <div className="header-container1">
            {" "}
            {/* Use the "header-container" class */}
            <div className="header-content1">
              {" "}
              {/* Use the "header-content" class */}
              <h1>Contact Us</h1>
              <p>If you have any questions about Car World, please fill out the form on the page.</p>
              <img src="your_image_url_here.jpg" alt="" />
              
            </div>
          </div>
        </div>





    <div className="contact-container">
      <div className="video-container">
      <video autoPlay loop muted className="contact-video">
  <source src={video} type="video/mp4" /> 
</video>
     
      </div>

      <div className="form-container">
       
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" rows="6" required></textarea>
</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <Footer/>

    </>
  );
}



export default Contact;
