import React from "react";
import "./sideBanner.css";
import leaf from "./assets/leaf1.png";
import leaf2 from "./assets/leafP1.png";
import { Icon } from "@iconify/react";
import heartbeat from "@iconify-icons/uil/heartbeat";

export default function SideBanner() {
  return (
    <div>
      <div className="side-banner">
        <div className="side-data">
          <p>Keto Diet</p>
          <div className="side-category">
            <div className="side-category-icon">
              <Icon icon={heartbeat} />
            </div>
            <p>Health</p>
          </div>
          <p className="side-date">5.July.2021 8:45pm </p>
        </div>
        <img
          alt="ladder"
          className="side-req-image"
          src="https://i.stack.imgur.com/y9DpT.jpg"
        />
        <div className="side-desc">
          <p>
            Looking for a partner in my diet journey. Am planning to follow the
            keto diet and we can share recipes or even cook together!{" "}
          </p>
        </div>
      </div>

      <div className="side-number">
        <p>30</p>
        <p className="submitters-p">Submits</p>
      </div>
      <div className="side-circle side-circle2 "></div>
      <div className="side-circle"></div>
      <img className="ladder" alt="ladder" src={leaf} />
      <img className="leafs2" alt="ladder" src={leaf2} />
    </div>
  );
}
