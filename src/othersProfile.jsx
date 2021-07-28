import React from 'react'
import Nav from './nav';
import './othersReqCard.css'
import OtherSideBanner from './otherSideBanner';
import TopBanner from "./topBanner";
import riding from "./assets/riding.png";
import dayflow from "./assets/dayflow.png";
import walking from "./assets/manwalkscropped.png";
import funkyground from "./assets/funkyground.png";
import manwalks from "./assets/manwalks.png";



export default function OthersProfile() {
  return (
    <div>
      <style>{'body { background-color: #f0eaf7; }'}</style>

      <Nav/>
      <TopBanner/>
      <OtherSideBanner/>
      <div className="purple-div"></div>
      {/* <img className="dayflow" alt="dayflow" src={walking} /> */}
      <img className="dayflow" alt="dayflow" src={funkyground} />
      <img className="man-walk" alt="dayflow" src={manwalks} />
    </div>
  )
}
