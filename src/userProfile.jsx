import React from 'react'
import Nav from './nav'
import ProfileBanner from './profileBanner'
import TopBanner from './topBanner'
import funkyground from "./assets/funkyground.png";
import manwalks from "./assets/manwalks.png";

export default function UserProfile() {
  return (
    <div>
      <style>{'body { background-color: #f2e8ff; }'}</style>

      <Nav/>
      <TopBanner/>
      <ProfileBanner/>
      
      <img className="dayflow" alt="dayflow" src={funkyground} />
      <img className="man-walk" alt="dayflow" src={manwalks} />
    </div>
  )
}
