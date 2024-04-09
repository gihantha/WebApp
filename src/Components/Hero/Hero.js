import React from "react";

import "./Hero.css";
import hero_image from "../../Assets/hero_image.png";
import hero_left from "../../Assets/hero_left.png";
import hero_right from "../../Assets/hero_right.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-banner">
        <img className= 'hero-banner-img'src={hero_image} alt="hero_image" />
        
      </div>
      <div className="hero-left">
        <img src={hero_left} alt="hero_left" />
        <div className="hero-description">
          <h3>Web & Mobile App Development</h3>
          <p>d mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button type="button" className="hero-btn">
          LEARN MORE
          </button>
          
        </div>
      </div>
      <div className="hero-right">
      <div className="hero-description">
          <h3>Digital Strategy Consulting</h3>
          <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button type="button" className="hero-btn">
          LEARN MORE
          </button>
          
        </div>
        <img className="hero-image" src={hero_right} alt="hero_right" />
      </div>
    </div>
  );
};

export default Hero;
