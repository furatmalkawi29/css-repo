import React from "react";
import "./reset.css";
import "./landing.css";
import guy from "./assets/body.png";
import bubble1 from "./assets/bubble1.png";
import bubble2 from "./assets/bubble2.png";
import bubble3 from "./assets/bubble3.png";
import bubble4 from "./assets/bubble4.png";
import sphere1 from './assets/sphere1.png'
import sphere2 from './assets/sphere2.png'

function Landing() {
  return (
    <div>
      <div className="hero">
        <div className="text">
          <h1>
            Boundless company . Friends from all over the world . 
          </h1>
        </div>
        <div className="images">
        <img className="bubble1" alt="bubble" src={bubble1} />
        <img className="bubble2" alt="bubble" src={bubble2} />
        <img className="bubble5" alt="bubble" src={bubble2} />
        <img className="bubble3" alt="bubble" src={bubble3} />
        <img className="bubble4" alt="bubble" src={bubble4} />
        <img className="sphere1" alt="sphere" src={sphere1} />
        <img className="sphere2" alt="sphere" src={sphere2} />  
        <img className="sphere3" alt="sphere" src={sphere2} /> 
        <img className="sphere4" alt="sphere" src={sphere2} />      
          <img className="guy" alt="guy" src={guy} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
