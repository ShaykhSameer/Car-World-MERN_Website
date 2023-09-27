import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="media-block-card">
      <div className="media-block-holder has-animation fadeInUp">
        <div className="info">
          <div className="wrap">
            <div className="content">
              <div className="row">
                
                 
                  <div className="text-container">
                    <h1 className="h3" style={{ marginTop: "20px" }}>
                    Our Services:
                    </h1>
                    <ul className='ul' >
                      <li>
Car Reviews: Get in-depth reviews of the newest car models, including performance, safety features, and more.</li>
                      <li>Car Buying Guide: Find tips and guidance on buying the perfect car for your needs and budge</li>
                      <li>Maintenance Tips: Learn how to keep your car in top condition with our maintenance guides.</li>
                      <li>News and Updates: Stay informed about the latest developments in the automotive world.</li>

                    </ul>
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
