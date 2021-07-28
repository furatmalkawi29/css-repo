import React from "react";
import "./otherSideBanner.css";
import { Icon } from "@iconify/react";
import heartbeat from "@iconify-icons/uil/heartbeat";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import person from "./assets/person1.png";
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


export default function OtherSideBanner() {

  const classes = useStyles();

  return (
    <div>
 
      <div className="side-banner2">
      <div className="user-stuff">
          <img className="my-user-image" src={person} alt="user" />
          <div className="my-user-text">
            <p>Alex Dariel</p>
            <p>France, Paris</p>
        </div>
      </div>
      <div className="his-req-stuff">

        <div className="side-data2">
          <p>Keto Diet</p>
          <div className="side-category2">
            <div className="side-category-icon2">
              <Icon icon={heartbeat} />
            </div>
            <p>Health</p>
          </div>
          <p className="side-date2">5.July.2021 8:45pm </p>
        </div>
        <img
          alt="ladder"
          className="side-req-image2"
          src="https://i.stack.imgur.com/y9DpT.jpg"
          />
        <div className="side-desc2">
          <p>
            Looking for a partner in my diet journey. Am planning to follow the
            keto diet and we can share recipes or even cook together!{" "}
          </p>
        </div>

        <Button
              variant="contained"
              className={`${classes.button} + newbtn`}
              startIcon={<AddIcon />}
              >
              Submit
            </Button>
              </div>
      </div>

      <div className="side-number2">
        <p>20</p>
        <p className="submitters-p2">Submits</p>
      </div>
      <div className="side-circle5"></div>
      
    </div>
  );
}
