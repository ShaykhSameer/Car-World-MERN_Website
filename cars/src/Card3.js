import React from 'react'
import './Card.css';
import carVideo from "./images/v5.mp4";

function Card() {
  return (
    <>
     <div className="media-block-card">
  <div className="media-block-holder has-animation fadeInUp">
    <div className="info">
      <div className="wrap">
        <div className="content">
          <div className="row">
            <div className="column">
              <h3 className="h2" >
              Browse Car Models:
              </h3>
              <p>
                &#8211; 
Explore our extensive database of car models from various manufacturers.
 <br />
                &#8211; Compare specifications, pricing, and user reviews to find the ideal vehicle for you.<br />
              </p>

             
            </div>
            <div className="contact-container5">
                  <div className="video-container2">
                    <video autoPlay loop muted className="contact-video2">
                      <source src={carVideo} type="video/mp4" />
                    </video>
                  </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Card
