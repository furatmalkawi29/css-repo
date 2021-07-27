import React from "react";
import RequestCard from "./requestCard";
import "./othersReqCard.css";
import { Icon } from "@iconify/react";
import person from "./assets/person1.png";
import plus from '@iconify-icons/uil/plus';
import messege from '@iconify-icons/uil/comment';

export default function OthersReqCard() {
  return (
    <div className="others-card">
      <div className="user-part">
        <div className="user-data">
          <img className="user-image" src={person} alt="user" />
          <div className="user-text">
            <p>Alex Dariel</p>
            <p>France, Paris</p>
          </div>
        </div>
        <div  className="user-icons">
          <div className="user-icon">
            <Icon icon={plus} />
          </div>
          <div className="user-icon">
            <Icon icon={messege} />
        </div>

        </div>
      </div>
      <RequestCard />
    </div>
  );
}
