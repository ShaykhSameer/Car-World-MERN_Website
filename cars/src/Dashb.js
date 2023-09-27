import React from "react";
import "./dashb.css";
import { useNavigate } from "react-router-dom";
import video from "./images/v2.mp4";
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";




function Dashb() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Signup");
  }

  function handleClick1() {
    navigate("/Login");
  }

  return (
    <>
      <Nav />
      <div className="background">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="content-container">
          <div className="home-page">
            <div className="image">
              <h1 className="extra-bold text-center">
                We Engineer Software Solutions
              </h1>
            </div>
            <div className="button-container text-center">
              <button className="skew-button" onClick={handleClick}>
                Signup
              </button>
              <button className="skew-button" onClick={handleClick1}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

     
<Card/>

<Card2/>

<Card3/>
 
<Card5/>

<Card4/>




      <Footer/>
    </>
  );
}

export default Dashb;
