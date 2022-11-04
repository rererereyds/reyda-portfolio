import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = ({closeNav}) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
    window.location.reload();
  };
  const navigateToAbout = () => {
    navigate('/about');
    window.location.reload();
  };
  const navigateToProjects = () => {
    navigate('/projects');
    window.location.reload();
  };

  return (
    <div className="navigation-css">
      <div className="grid-modal-css">
        <div className="logo-container-css">
          <img
            className="logo-image-css"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="text1-modal-css">
          <p className="home-text-css" onClick={navigateToHome}>
            1. Home
          </p>
        </div>
        <div className="text2-modal-css">
          <p className="about-text-css" onClick={navigateToAbout}>
            2. About
          </p>
        </div>
        <div className="text3-modal-css" onClick={navigateToProjects}>
          <p className="projects-text-css">3. Projects</p>
        </div>
        <div className="text4-modal-css">
          <p className="contact-text-css">4. Contact</p>
        </div>
        <div className="hamburger-container-css">
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
  );
};

export default Navigation;
