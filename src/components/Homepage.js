import React, { useState } from "react";
import "./Homepage.css";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";

const Homepage = () => {
  // const navigateToProjects = () => {<Navigate to="/projects"/>}
  const navigate = useNavigate();
  const navigateToProjects = () => {
    // 👇️ navigate to /contacts
    navigate('/projects');
  };

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
      <div className="grid-container-css">
        <div className="logo-container-css">
          <img
            className="logo-image-css"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="text1-container-css">
          <p className="text1-css">Hi! I'm Reyda Barroso.</p>
        </div>
        <div className="text2-container-css">
          <p className="text2-css">Full Stack Web Developer.</p>
        </div>
        <div className="text3-container-css">
          <p className="text3-css">
            Making your desired websites and web applications possible.
          </p>
        </div>
        <div className="splash-container-css">
          <p className="frontend-text-css" style={userGradient}>
            Front-end
          </p>
          <p className="backend-text-css" style={userGradient}>
            Back-end
          </p>
          <p className="fullstack-text-css" style={userGradient}>
            Full Stack
          </p>
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
          <div className="navigation-css">
            <div className="grid-modal-css">
              <div className="logo-modal-css">
                <img
                  className="logo-image-css"
                  src={require("../images/logo.png")}
                  alt="logo"
                />
              </div>
              <div className="text1-modal-css">
                <p className="about-text-css">1. About</p>
              </div>
              <div className="text2-modal-css">
                <p className="projects-text-css" onClick={navigateToProjects}>2. Projects</p>
              </div>
              <div className="text3-modal-css">
                <p className="contact-text-css">3. Contact</p>
              </div>
              <div className="hamburger-modal-css">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list hamburger2-css"
                  viewBox="0 0 16 16"
                  onClick={closeNav}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Homepage;
