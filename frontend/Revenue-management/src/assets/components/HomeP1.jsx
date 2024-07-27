import React, { useState, useEffect } from 'react';
import './HomeP1.css';
import home_side from '../img/home-side-img.gif';
import secondImage from '../img/home-side-image.png';
import Regform from "./RegistrationForm" 
import Udashboard from "./User-dashboard"
import Slider from "./Slider"

export default function HomeP1() {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondImage(true);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="homep1-container rajwada-background">
        <div id="homeP1-1">
          <div id="tag-line1">Your city, your taxes, our responsibility!</div>
          <div id="tag-line2">We ❤ INDORE</div>
        </div>

        <div id="homeP1-2">
          {showSecondImage ? (
            <img src={secondImage} alt="Second" />
          ) : (
            <img src={home_side} alt="Home Side" />
          )}
        </div>
      </div>
<div>
  <Udashboard></Udashboard>
</div>
    <div>
      <Regform></Regform>
    </div>

    <div>
      <Slider></Slider>
    </div>
    </>
  );
}
