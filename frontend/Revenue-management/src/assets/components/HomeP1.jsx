import React, { useState, useEffect } from 'react';
import './HomeP1.css';
import home_side from '../img/home-side-img.gif';
import secondImage from '../img/home-side-image.png';
import Chart from './Chart';
// import Piechart from "./Piechart";

export default function HomeP1() {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondImage(true);
    }, 3500);

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

      <div className="Dashboard-container">
        <div className="status-display-container">
          <div className="status-display">
            <div className="status-box">Balance</div>
            <div className="status-box">Payment Status</div>
            <div className="status-box">xyz</div>
          </div>
          <div className="line-graph">
            <Chart />
          </div>
        </div>
        <div className="payment-display">
          <div>Total Tax Paid</div>
          <div>Dues</div>
          <div>Pts Earned</div>
          {/* <Piechart /> */}
        </div>
      </div>
    </>
  );
}
