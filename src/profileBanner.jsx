import React from 'react'
import './profileBanner.css'
import "./otherSideBanner.css";
import { Icon } from "@iconify/react";
import marker from "@iconify-icons/uil/map-marker-alt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import person from "./assets/person1.png";
import Chips from "./profileChip.jsx";
import cap from "@iconify-icons/uil/graduation-cap";



const useStyles = makeStyles((theme) => ({
  button: {
    textShadow: "2px 1px 3px rgba(24, 24, 24, 0.39)",
    color: "white",
    width: "10em",
    backgroundColor: "rgba(90, 214, 224,.7)",
    position:"absolute",
    bottom:"1em",
    left:"18em",
    padding:".55em .1em",
    marginTop:".5em",
    zIndex:"4",
    fontSize:".8em"
  },
}));


export default function ProfileBanner() {

  const classes = useStyles();
  return (
    <div>
 
      <div className="side-banner22">
      <div className="user-stuff6">
          <img className="my-user-image6" src={person} alt="user" />

      </div>
      <div className="his-req-stuff6">

        <div className="side-data22">
          <p>Alex Dariel</p>
          <p className="side-desc22">
          A geek at heart 🤓, I like everything from board games, comics,
            books, and movies to technology.
          </p>

          <div className="groups-data">
          <div 
          className="side-category22">
            <div className="side-category-icon22">
              <Icon icon={marker} />
            </div>
            <p className="loca">France, Paris</p>
          </div>
          <div className="side-category22">
            <div className="side-category-icon22">
              <Icon icon={cap} />
            </div>
            <p  className="edu">Bachelor's degree in Civil Engineering</p>
          </div>
            </div>
        
        </div>

        <Chips className="chip chip2"/>

        <Button
              variant="contained"
              className={`${classes.button} + newbtn`}
              startIcon={<AddIcon />}
              >
              Messege
            </Button>
              </div>
      </div>

      <div className="side-number22">
        <p>20</p>
        <p className="submitters-p22">Pairs</p>
      </div>
      <div className="side-circle55"></div>

      {/* <div className="side-circle3 side-circle4 "></div> */}
      {/* <div className="side-circle3"></div> */}
      {/* <img className="ladder2" alt="ladder" src={leaf} />
      <img className="leafs3" alt="ladder" src={leaf2} /> */}
    </div>
  );
}


