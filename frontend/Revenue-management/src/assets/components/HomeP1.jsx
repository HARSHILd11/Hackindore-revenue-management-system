import React, { useState, useEffect } from 'react';
import './HomeP1.css';
import home_side from '../img/home-side-img.gif';

import HomeP2 from './HomeP2'
import PropertyTaxCalculator from './PropertyTaxCalculator';

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
          <div id="tag-line1">Simple and Transparent Revenue Management, Brightening the Future Of Our Indore!</div>
          <div id="tag-line2">"स्मार्ट इंदौर, स्मार्ट राजस्व प्रबंधन!"</div>
        </div>

        <div id="homeP1-2">
            <img src={home_side} alt="Home Side" />
       
        </div>
      </div>

    

    <HomeP2></HomeP2>
    <div>
      <Slider></Slider>
    </div>


   
    </>
  );
}
