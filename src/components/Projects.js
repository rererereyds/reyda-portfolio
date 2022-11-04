import React, { useState } from 'react';
import "./Projects.css";
import Modal from "react-modal";
import Navigation from "./Navigation";

const Projects = () => {
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
    <div className="projects-page-css">
      <div className='projects-grid-container-css'>
        <div className="logo-container-css">
          <img
            className="logo-image-css"
            src={require("../images/logo.png")}
            alt="logo"
          />
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

        <div className='projects-container'>
          <div className='image1-css'>
            <img
              className="proj-image-css"
              src={require("../images/proj1.png")}
              alt="logo"
            />
          </div>
          <div className='name1-css'>
            <p className='proj-texts-css bold-css'>Project Name : Card Captor</p>
          </div>
          <div className='desc1-css'>
            <p className='proj-texts-css'>
              A gaming project wherein the player must help Kero-chan
              capturing the lost card. Kero-chan must not fall in pits.
            </p>
          </div>
          <div className='tech1-css'>
            <p className='proj-texts-css'>Technology Stacks Used:</p>
            <div className='tech-images-css'>
              <img
                className="tech-display-css"
                src={require("../images/html.png")}
                alt="logo"
              />
              <img
                className="tech-display-css"
                src={require("../images/css.png")}
                alt="logo"
              />
              <img
                className="tech-display-css"
                src={require("../images/javascript.png")}
                alt="logo"
              />
            </div>
          </div>
          <div className='code1-css'>
            <p className='proj-texts-css'>See Code:</p>
            <a className="github1-css" href='https://github.com/rererereyds/javascript-game' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon-css" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
          <div className='demo1-css'>
            <p className='proj-texts-css'>See Demo:</p>
            <a className="heroku1-css" href='https://reyda-javascript-game.herokuapp.com/index.html' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon-css" viewBox="0 0 16 16">
              <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
              <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
            </svg>
            </a>
          </div>

          <div className='image2-css'>
            <img
              className="proj-image-css"
              src={require("../images/proj2.png")}
              alt="logo"
            />
          </div>
          <div className='name2-css'>
            <p className='proj-texts-css bold-css'>Project Name : To Do Tracker</p>
          </div>
          <div className='desc2-css'>
            <p className='proj-texts-css'>
              A space-themed task management application,
              the user can easily identify done or still pending activities.
            </p>
          </div>
          <div className='tech2-css'>
          <p className='proj-texts-css'>Technology Stacks Used:</p>
            <div className='tech-images-css'>
              <img
                className="tech1-display-css"
                src={require("../images/react2.png")}
                alt="logo"
              />
            </div>
          </div>
          <div className='code2-css'>
            <p className='proj-texts-css'>See Code:</p>
            <a className="github1-css" href='https://github.com/rererereyds/react-to-do-app' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon-css" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
          <div className='demo2-css'>
            <p className='proj-texts-css'>See Demo:</p>
            <a className="heroku1-css" href='https://reyda-to-do-application.herokuapp.com/' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon-css" viewBox="0 0 16 16">
              <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
              <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
            </svg>
            </a>
          </div>

          <div className='image3-css'>Coming Soon</div>

          <div className='image4-css'>Coming Soon</div>
        </div>
      </div>
      {/* <div>
        <p>Project: Capturing Cards</p>
        <p>Theme: Game</p>
        <p>Language Used: HTML, CSS, Javascript</p>
        <a href="https://github.com/rererereyds/javascript-game" target="_blank">Code: https://github.com/rererereyds/javascript-game</a>
        <div>
          <a href="https://reyda-javascript-game.herokuapp.com/" target="_blank">Run: https://reyda-javascript-game.herokuapp.com/</a>
        </div>
      </div>
      <div>
        <p>Project: To Do App</p>
        <p>Theme: Task Management</p>
        <p>Language Used: HTML, CSS, Javascript</p>
        <p>Framework: React</p>
        <a href="https://github.com/rererereyds/react-to-do-app" target="_blank">Code: https://github.com/rererereyds/react-to-do-app</a>
        <div>
          <a href="https://reyda-to-do-application.herokuapp.com/" target="_blank">Run: https://reyda-to-do-application.herokuapp.com/</a>
        </div>
      </div> */}

      <Modal
        isOpen={show}
        // onRequestClose={closeNav}
        style={customStyles}
        ariaHideApp={false}
      >
        <Navigation closeNav={closeNav} />
      </Modal>
    </div>
  )
}

export default Projects