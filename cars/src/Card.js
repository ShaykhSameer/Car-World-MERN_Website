import React from 'react'
import './Card.css';
import carImage1 from "./images/car1.jpg";

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
              <h3 className="h2" style={{ marginTop: "20px" }}>
                The Ultimate Vision System for Automotive Excellence
              </h3>
              <p>
                &#8211; Unmatched PerformanceA <br />
                &#8211; Ultra-Low Latency <br />
                &#8211; Industry-Leading Power Efficiency
              </p>

              <div
                className="media-accordion-item-custom"
                style={{ marginTop: "30px" }}
              >
                <a href="#" className="button brief2">
                  Product Details
                </a>
              </div>
              <div className="media-accordion-item-custom">
                <a href="#" className="button brief">
                  Discover Car World Product Insights
                </a>
              </div>
              <div className="media-accordion-item-custom">
                <a href="/recogni-sdk/" className="button">
                  Get to Know Car World SDK
                </a>
              </div>
            </div>
            <div className="column">
              <div className="image">
                <img src={carImage1} alt="Image" />
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
