import React, { useState } from 'react';
import Navigation from './Navigation';
import "./NavigationBar.css";
import Modal from "react-modal";

const NavigationBar = () => {
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
    <div className='navigation-bar'>
      <div className='navigation-bar-grid'>
        <div className="logo-container">
          <img
            className="logo-image"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="hamburger-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list hamburger"
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
  )
}

export default NavigationBar