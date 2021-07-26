import React from "react";
import "./requestCard.css";
import "./reset.css";
import ReqDropdown from "./ReqDropdown";
import { Icon } from "@iconify/react";
import heartbeat from "@iconify-icons/uil/heartbeat";

//categories icons 
import Study from "@iconify-icons/uil/graduation-cap";
import Gaming from "@iconify-icons/uil/laptop";
import Sports from "@iconify-icons/uil/football-ball";
import Traveling from "@iconify-icons/uil/plane";
import Cooking from "@iconify-icons/uil/utensils";




export default function RequestCard() {
  return (
    <div className="user-card">
      <div>
        <img
          className="req-image"
          alt="request"
          src="https://i.stack.imgur.com/y9DpT.jpg"
        />
      </div>
      <div className="req-info">
        <div>
          <p>Keto Diet</p>
          <ReqDropdown />
        </div>
        <div className="category">
          <div className="category-icon">
            <Icon icon={heartbeat} />
          </div>
          <p>Health</p>
        </div>
        <p className="description">
          Looking for a partner in my diet journey. Am planning to follow the
          keto diet and we can share recipes or even cook together!
          </p>
      </div>
    </div>
  );
}
