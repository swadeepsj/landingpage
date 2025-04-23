import React from "react";
import "./App.css";
import OfferLetRVector from './OfferLetRVector.png';
import bg from './bg.png';

export default function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>

    <div className="landing-page">
      <div className="logo-container">
        <div className="logo"> 
        <img src={OfferLetRVector} alt="OfferLetRVector" />
        </div>
      </div>

      <div className="content">
        <h1 className="heading">ETHICAL AI.<br />TRANSPARENT HIRING.</h1>
        <h2 className="subheading">COMING SOON.</h2>

        <p className="description">
          POWERED BY OSHUN1.0 — OUR SOUL-DRIVEN AI THAT RESTORES ACCESS, EQUITY, AND <br />
          INTELLIGENCE TO CAREER MOBILITY.
        </p>

        
        <div className="email-form">
          <input
            type="email"
            placeholder="Input Your Email"
            className="email-input"
          />
          <button className="notify-button" >Notify Me</button>
        </div>
      </div>
    </div>
    </div>
  );
}
