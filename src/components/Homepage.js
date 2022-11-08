import React from "react";
import "./Homepage.css";

const Homepage = () => {
  const gradient = "linear-gradient(180deg, #D59BF6, #FF88DE)";
  const userGradient = {
    background: `${gradient}`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="homepage">
      <div className="homepage-grid-container">
        <div className="text1-container">
          <p className="text1">Hi! I'm Reydalin Barroso.</p>
        </div>
        <div className="text2-container">
          <p className="text2">Aspiring Full Stack Web Developer.</p>
        </div>
        <div className="text3-container">
          <p className="text3">
            Making your desired websites and web applications possible.
          </p>
        </div>
        <div className="splash-container">
          <div className="frontend-text" style={userGradient}>
            <div>Front End</div>
          </div>
          <div className="backend-text" style={userGradient}>
            <p>Back End</p>
          </div>
          <div className="fullstack-text" style={userGradient}>
            <p>Full Stack</p>
          </div>
        </div>
        <div className="techstacks-logo">
          <div className="frontend-logos">
            <img
              className="techstacks-image"
              src={require("../images/html.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/css.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/javascript.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/bootstrap.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/react.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
          </div>
          <div className="backend-logos">
            <img
              className="techstacks-image"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/express.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/mongodb.png")}
              alt="logo"
            />
          </div>
          <div className="fullstack-logos">
            {/* <img
              className="techstacks-image"
              src={require("../images/html.png")}
              alt="logo"
            /> */}
            <img
              className="techstacks-image"
              src={require("../images/css.png")}
              alt="logo"
            />
            {/* <img
              className="techstacks-image"
              src={require("../images/javascript.png")}
              alt="logo"
            /> */}
            <img
              className="techstacks-image"
              src={require("../images/bootstrap.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/react.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/express.png")}
              alt="logo"
            />
            <img
              className="techstacks-image"
              src={require("../images/mongodb.png")}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
