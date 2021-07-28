import React from 'react'
import TopBanner from "./topBanner";
import Nav from "./nav.jsx";
import SideBanner from './sideBanner'
import SubmittersBanner from './submittersBanner'
import SubmitterCard from './submitterCard'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Icon } from "@iconify/react";
import pen from "@iconify-icons/uil/pen";
import trash from "@iconify-icons/uil/trash";


const useStyles = makeStyles((theme) => ({
  button: {
    textShadow: "2px 1px 3px rgba(24, 24, 24, 0.39)",
    color: "white",
    backgroundColor: "rgba(90, 214, 224,.7)",
    position:"absolute",
    left:"18.5em",
    padding:".3em .1em",
    marginTop:"1em",
    zIndex:"4"
  },
  button2:{
    left:"24.5em",
  }
}));

export default function ReqDetailsPage() {
  const classes = useStyles();

  return (
    <div>
      <Nav/>
      <TopBanner />
      <SideBanner/>
      <Button
              variant="contained"
              className={`${classes.button} + newbtn`}
            ><div>
            <Icon icon={pen} style={{fontSize:"1.5em"}} />
          </div></Button>

      
          <Button
              variant="contained"
              className={`${classes.button} + newbtn + ${classes.button2} `}
            ><div>
            <Icon icon={trash} style={{fontSize:"1.5em"}} />
          </div></Button>
      <SubmittersBanner>
        <SubmitterCard/>
        <SubmitterCard/>
        <SubmitterCard/>
      </SubmittersBanner>

    </div>
  )
}
