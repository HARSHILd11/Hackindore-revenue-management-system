import React from 'react'
import './HomeP1.css'
import mncLogo from "../img/mncLogo.png"
import home_side from "../img/home-side-image.png"

export default function HomeP1() {
  return (
    <>
    <div className="homep1-container">

        {/* //------1st container */}
        <div id="homeP1-1">
            <div id="tag-line1">Lorem ipsum dolor sit amet Your city, your taxes, our responsibility nihil!</div>
            <div id="tag-line2">Lorem ipsum dolor sit amet ectetur adipisicing elit. Laboriosam cum officia nihil!</div>
        </div>
        {/* -----------2nd Container */}
        <div id="homeP1-2">
            <img src={home_side} alt="" />
        </div>
    </div>
    </>
  )
}
