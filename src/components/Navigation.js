import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = ({closeNav}) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  const navigateToAbout = () => {
    navigate('/about');
  };
  const navigateToProjects = () => {
    navigate('/projects');
  };
  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="navigation">
      <div className="grid-modal">
        <div className="nav-logo-container">
          <img
            className="nav-logo-image"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="nav-hamburger-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list nav-hamburger"
            viewBox="0 0 16 16"
            onClick={closeNav}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="ramble-image-container">
          <img
            className="ramble-image"
            src={require("../images/nav.png")}
            alt="logo"
          />
        </div>
        <div className="text1-modal">
          <p className="home-text" onClick={() => {navigateToHome(); closeNav()}}>
            1. Home
          </p>
        </div>
        <div className="text2-modal">
          <p className="about-text" onClick={() => {navigateToAbout(); closeNav()}}>
            2. About
          </p>
        </div>
        <div className="text3-modal" onClick={() => {navigateToProjects(); closeNav()}}>
          <p className="projects-text">3. Projects</p>
        </div>
        <div className="text4-modal" onClick={() => {navigateToContact(); closeNav()}}>
          <p className="contact-text">4. Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
