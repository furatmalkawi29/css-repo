import React from 'react'
import { FaUser, FaCog, FaCompass , FaBell , FaEnvelope } from 'react-icons/fa';

import './nav.css'

export default function Nav() {
  return (
    <nav className="mynav">
      <ul className="icons">
        <li> <FaCog color="#333333" size={23}/></li>
        <li> <FaUser color="#333333" size={23}/> </li>
        <li> <FaCompass color="#333333" size={23}/> </li>
        <li> <FaBell color="#333333" size={23}/> </li>
        <li> <FaEnvelope color="#333333" size={23}/> </li>
      </ul>
    </nav>
  )
}
