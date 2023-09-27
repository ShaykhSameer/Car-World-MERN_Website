import React from 'react';
import './about.css';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  return (
    <>
      <Nav />
      <div className="home-page1">
        <div className="header-container2">
          <div className="header-content2">
            <h1>About Us</h1>
            <p>We deliver state-of-the-art visual perception for Autonomous Vehicles</p>
            <img src="your_image_url_here.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="card-container1">

        <div className="card1">
        
          <h2>Our Mission</h2>
          <p>Providing the highest performing AI-based visual inference for autonomous vehicles</p>
        </div>

        <h1 className="heading">Our Values</h1>

        <div className="value-cards">
          <div className="card1">
            <div className="ico-holder">
              <img
                width="50"
                height="50"
                decoding="async"
                src="https://www.recogni.com/wp-content/uploads/2022/03/our-values-ico-02.svg"
                alt="Safety Icon"
              />
            </div>
            <h2>Safety</h2>
            <p>Prioritizing safety to ensure the trust of our customers</p>
            
          </div>

          <div className="card1">
            <div className="ico-holder">
              <img
                width="50"
                height="50"
                decoding="async"
                src="https://www.recogni.com/wp-content/uploads/2022/03/our-values-ico-01.svg" 
                alt="Innovation Icon"
              />
            </div>
            <h2>Innovation</h2>
            <p>Driving innovation in AI and computer vision technologies</p>
          </div>

          <div className="card1">
            <div className="ico-holder">
              <img
                width="50"
                height="50"
                decoding="async"
                src="https://www.recogni.com/wp-content/uploads/2022/03/our-values-ico-03.svg" 
                alt="Efficiency Icon"
              />
            </div>
            <h2>Efficiency</h2>
            <p>Optimizing efficiency to make AI-powered solutions accessible</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
