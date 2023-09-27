import React from "react";
import "./home.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Cars from "./Cars";
import { useNavigate } from "react-router-dom";
import image from "./bg.jpg";

import car1Image1 from "../src/images/car1.jpg";
import car1Image2 from "../src/images/car2.jpg";
import car1Image3 from "../src/images/car3.jpg";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Add");
  }


  function handleClick16() {
    navigate("/Cars");
  }
  return (
    <>
      <Nav />

      <div className="home-page">
        <div className="home-page">
          <div className="header-container">
            {" "}
            <div className="header-content">
              {" "}
              <h1>Welcome to Car World</h1>
              <p>Your one-stop destination for all things cars</p>
              <img src="your_image_url_here.jpg" alt="" />
              <button className="button" onClick={handleClick16}>Explore Now</button>
            </div>
          </div>
        </div>

        <section className="featured-cars">
          <div className="car-list">
            <div className="car-card">
              <img src={car1Image1} alt="Car 1" />
              <h3>Car Model 1</h3>
              <h5>Price: $30,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick}>
                  + ADD
                </button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image2} alt="Car 2" />
              <h3>Car Model 2</h3>
              <h5>Price: $25,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick}>
                  + ADD
                </button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image3} alt="Car 3" />
              <h3>Car Model 3</h3>
              <h5>Price: $45,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick}>
                  + ADD
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
