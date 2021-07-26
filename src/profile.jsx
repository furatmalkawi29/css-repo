import React from "react";
import "./reset.css";
import "./profile.css";
import ReqBanner from './reqBanner'
import SearchBar from './searchBar'
import person from "./assets/person1.png";
import circle from "./assets/greens.png";
import msg from "./assets/plane4.png";
import Chips from "./chip.jsx";
import Nav from "./nav.jsx";
import { Icon } from "@iconify/react";
import pen from "@iconify-icons/uil/pen";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    width:"11.8em",
    backgroundColor:"rgba(90, 214, 224,.7)",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className="profile-page">
      <aside>
        <img className="person" src={person} alt="person" />

        <div className="info">
          <p>Alex Dariel</p>
          <p>Barranquilla, Colombia</p>
          <p></p>
        </div>

        <div className="bio">
          <p>
            
            A geek at heart 🤓, I like everything from board games, comics,
            books, and movies to technology, science, and various different
            franchises.😎
          </p>
        </div>

        <Chips className="chip"></Chips>
        <div className="circle-icon edit-icon" > 
  <Icon icon={pen} /> 
  </div>
      </aside>

      <div className="container">
        <div className="content">
          <Nav />
            <div className="search">
            <SearchBar/>
            <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        New Request
      </Button>
            </div>

            <div className="other">
              
              <div className="banner">
              <img className="circle" src={circle} alt="green" />
              <img className="msg " src={msg} alt="green" />
              <div className="number">
                <p>
                  <span>+</span>30
                </p>
                <p>Pairs</p>
              </div>
              </div>

              <div className="requests">
              <ReqBanner/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
