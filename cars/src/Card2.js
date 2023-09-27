import React from 'react';
import './Card.css';
import carVideo from "./images/v4.mp4";

function Card() {
  return (
    <div className="media-block-card">
      <div className="media-block-holder has-animation fadeInUp">
        <div className="info">
          <div className="wrap">
            <div className="content">
              <div className="row">
                <div className="contact-container1">
                  <div className="video-container1">
                    <video autoPlay loop muted className="contact-video1">
                      <source src={carVideo} type="video/mp4" />
                    </video>
                  </div>

                  {/* Text Container */}
                  <div className="text-container">
                    <h1 className="h3" style={{ marginTop: "20px" }}>
                      Unrivaled Perception
                    </h1>
                    <ul className='ul' >
                      <li>Peta-Op class performance</li>
                      <li>Industry's lowest latency and jitter</li>
                      <li>Highest power efficiency standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
