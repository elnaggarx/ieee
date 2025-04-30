import React from "react";
import { Gradient } from "whatamesh";
import "./heroStyles.css"
import aastWhite from "../../assets/aast white.png"
import sbWhite from "../../assets/IEEE AAST white.png"
import lBracket from "../../assets/svg-image-20.svg"
import rBracket from "../../assets/svg-image-21.svg"
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    const gradient = new Gradient();
    setTimeout(() => {
      gradient.initGradient("#gradient-canvas");
    }, 100); 
  }, []);
  return (
    <div className="hero">
        <div className="overlay"></div>
        <canvas id="gradient-canvas" className="home-hero-canvas" data-js-darken-top data-transition-in>
        </canvas>
        <div className="hero-left-section">
            <div className="hero-logos-flex">
                <img src={lBracket} alt="error" />
                <img src={sbWhite} alt="Student Branch" className="sb-logo" />
                <img src={aastWhite} alt="AAST" className="aast-logo"/>
                <img src={rBracket} alt="error" />
            </div>
            <h1>
            Connect. Innovate. <br></br>
            Inspire.
            </h1>
            <h2>
              IEEE AAST Student Branch
            </h2>
        </div>
        
    </div>
    
  );
};

export default Hero;
