import React, { useState } from "react";
import "./Homepage.css";
import Modal from "react-modal";
import Navigation from "./Navigation";

const Homepage = () => {
  const gradient = "linear-gradient(180deg, #D59BF6, #FF88DE";
  const userGradient = {
    background: `${gradient}`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  const [show, setShow] = useState(false);
  const openNav = () => {
    setShow(true);
  };

  const closeNav = () => {
    setShow(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid blue",
    },
  };

  return (
    <div className="homepage-css">
      <div className="homepage-grid-container-css">
        <div className="logo-container-css">
          <img
            className="logo-image-css"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="text1-container-css">
          <p className="text1-css">Hi! I'm Reydalin Barroso.</p>
        </div>
        <div className="text2-container-css">
          <p className="text2-css">Aspiring Full Stack Web Developer.</p>
        </div>
        <div className="text3-container-css">
          <p className="text3-css">
            Making your desired websites and web applications possible.
          </p>
        </div>
        <div className="splash-container-css">
          <div className="frontend-text-css" style={userGradient}>
            <div>Front End</div>
          </div>
          <div className="backend-text-css" style={userGradient}>
            <p>Back End</p>
          </div>
          <div className="fullstack-text-css" style={userGradient}>
            <p>Full Stack</p>
          </div>
        </div>
        <div className="techstacks-logo-css">
          <div className="frontend-logos-css">
            <img
              className="techstacks-image-css"
              src={require("../images/html.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/css.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/javascript.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/bootstrap.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/react.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
          </div>
          <div className="backend-logos-css">
            <img
              className="techstacks-image-css"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/express.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/mongodb.png")}
              alt="logo"
            />
          </div>
          <div className="fullstack-logos-css">
            <img
              className="techstacks-image-css"
              src={require("../images/html.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/css.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/javascript.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/bootstrap.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/react.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/nodejs.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/express.png")}
              alt="logo"
            />
            <img
              className="techstacks-image-css"
              src={require("../images/mongodb.png")}
              alt="logo"
            />
          </div>
        </div>
        <div className="hamburger-container-css">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list hamburger-css"
            viewBox="0 0 16 16"
            onClick={openNav}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>

        <Modal
          isOpen={show}
          // onRequestClose={closeNav}
          style={customStyles}
          ariaHideApp={false}
        >
          <Navigation closeNav={closeNav} />
        </Modal>
      </div>
    </div>
  );
};

export default Homepage;
