import React from 'react'
import './submitterCard.css'
import { Icon } from "@iconify/react";
import person from "./assets/person1.png";
import check from '@iconify-icons/uil/check';
import cross from '@iconify-icons/uil/times';
import messege from '@iconify-icons/uil/comment';

export default function submitterCard() {
  return (
       <div className="others-card2">
      <div className="user-part2">
        <div className="user-data2">
          <img className="user-image2" src={person} alt="user" />
          <div className="user-text2">
            <p>Alex Dariel</p>
            <p>France, Paris</p>
          </div>
        </div>
        <div  className="user-icons2">
          <div className="user-icon2">
            <Icon icon={check} />
          </div>
          <div className="user-icon2">
            <Icon icon={cross} />
          </div>
          <div className="user-icon2">
            <Icon icon={messege} />
          </div>

        </div>
        </div>

        </div>
  )
}
