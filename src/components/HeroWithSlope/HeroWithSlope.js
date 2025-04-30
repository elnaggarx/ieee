import React from 'react'
import { Gradient } from "whatamesh";
import "./heroWithSlope.css"
import { useEffect } from 'react';
const HeroWithSlope = (props) => {
  useEffect(() => {
    const gradient = new Gradient();
    setTimeout(() => {
      gradient.initGradient("#gradient-canvas");
    }, 100);

  }, []);

  return (
    <>
      <div className='about-hero'>
        <div className='about-overlay'></div>
        <canvas id="gradient-canvas" className='about-canvas' data-js-darken-top data-transition-in></canvas>
        <h1>{props.pName}</h1>
      </div>
      <div className='loading-screen'><img src="" alt="" /></div>
    </>
  )
}

export default HeroWithSlope
