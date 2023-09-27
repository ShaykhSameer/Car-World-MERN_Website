import React from 'react';
import './cars.css';
import Nav from './Nav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

import car1Image1 from '../src/images/car1.jpg';
import car1Image2 from '../src/images/car2.jpg';
import car1Image3 from '../src/images/car3.jpg';
import car1Image4 from '../src/images/car4.jpg';
import car1Image5 from '../src/images/car5.jpg';
import car1Image6 from '../src/images/car6.jpg';
import car1Image7 from '../src/images/car7.jpg';
import car1Image8 from '../src/images/car8.jpg';
import car1Image9 from '../src/images/car9.jpg';
import car1Image10 from '../src/images/car10.jpg';
import car1Image11 from '../src/images/car11.jpg';
import car1Image12 from '../src/images/car12.jpg';
import car1Image13 from '../src/images/car13.jpg';
import car1Image14 from '../src/images/car14.jpg';
import car1Image15 from '../src/images/car15.jpg';



function Cars() {
  const navigate=useNavigate();

  

  
  function handleClick1(){
    navigate("/Add");
  }

  return (
    <>
      <Nav />

      <div className="home-page1">
          <div className="header-container3">
            {" "}
            
            <div className="header-content3">
              {" "}
              
              <h1>Cars</h1>
              <p>Best Models</p>
              <img src="your_image_url_here.jpg" alt="" />
              
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
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image2} alt="Car 2" />
              <h3>Car Model 2</h3>
              <h5>Price: $25,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image3} alt="Car 3" />
              <h3>Car Model 3</h3>
              <h5>Price: $40,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="featured-cars">
          <div className="car-list">
            <div className="car-card">
              <img src={car1Image4} alt="Car 4" />
              <h3>Car Model 4</h3>
              <h5>Price: $50,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image5} alt="Car 5" />
              <h3>Car Model 5</h3>
              <h5>Price: $65,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image6} alt="Car 6" />
              <h3>Car Model 6</h3>
              <h5>Price: $450,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
          </div>
        </section>

        
        <section className="featured-cars">
          <div className="car-list">
            <div className="car-card">
              <img src={car1Image7} alt="Car 7" />
              <h3>Car Model 7</h3>
              <h5>Price: $80,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image8} alt="Car 8" />
              <h3>Car Model 8</h3>
              <h5>Price: $55,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image9} alt="Car 9" />
              <h3>Car Model 9</h3>
              <h5>Price: $70,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-cars">
          <div className="car-list">
            <div className="car-card">
              <img src={car1Image10} alt="Car 10" />
              <h3>Car Model 10</h3>
              <h5>Price: $47,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image11} alt="Car 11" />
              <h3>Car Model 11</h3>
              <h5>Price: $55,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image12} alt="Car 12" />
              <h3>Car Model 12</h3>
              <h5>Price: $45,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-cars">
          <div className="car-list">
            <div className="car-card">
              <img src={car1Image13} alt="Car 13" />
              <h3>Car Model 13 </h3>
              <h5>Price: $60,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image14} alt="Car 14" />
              <h3>Car Model 14</h3>
              <h5>Price: $75,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
            <div className="car-card">
              <img src={car1Image15} alt="Car 15" />
              <h3>Car Model15</h3>
              <h5>Price: $50,000</h5>
              <div className="button-container3">
                <button className="skew-button3" onClick={handleClick1}>+ ADD</button>
              </div>
            </div>
          </div>
        </section>

    
      <Footer />
    </>
  );
}

export default Cars;
