import React from 'react';
import "./Projects.css";

const Projects = () => {

  return (
    <div className="projects-page">
      <div className='projects-grid-container'>
        <div className='proj-text-container'>
          <p className='proj-text'>Projects</p>
        </div>
        <div className='projects-container'>  
          <div className='proj1-container'>
            <a className='image' href='https://63687a5a39a24063a3ea83b8--dapper-cactus-997f3f.netlify.app/' target="_blank">
              <img
                className="proj-image"
                src={require("../images/proj1.png")}
                alt="logo"
              />
            </a>
            <div className='name'>
              <p className='proj-texts bold'>Project Name : Card Captor</p>
            </div>
            <div className='desc'>
              <p className='proj-texts'>
                A gaming project wherein the player must help Kero-chan
                capture the lost card. Kero-chan must not fall in pits or else the game will be over.
              </p>
            </div>
            <div className='tech'>
              <p className='proj-texts'>Technology Stacks Used:</p>
              <div className='tech-images'>
                <img
                  className="tech-display"
                  src={require("../images/html.png")}
                  alt="logo"
                />
                <img
                  className="tech-display"
                  src={require("../images/css.png")}
                  alt="logo"
                />
                <img
                  className="tech-display"
                  src={require("../images/javascript.png")}
                  alt="logo"
                />
              </div>
            </div>
            <div className='code'>
              <p className='proj-texts'>See Code:</p>
              <a className="github" href='https://github.com/rererereyds/javascript-game' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <div className='demo'>
              <p className='proj-texts'>See Demo:</p>
              <a className="heroku1" href='https://63687a5a39a24063a3ea83b8--dapper-cactus-997f3f.netlify.app/' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
              </a>
            </div>
          </div>

          <div className='proj2-container'>
            <a className='image' href='https://63687b4d52cfab642a9f307a--playful-dragon-d7df7b.netlify.app/' target="_blank">
              <img
                className="proj-image"
                src={require("../images/proj2.png")}
                alt="logo"
              />
            </a>
            <div className='name'>
              <p className='proj-texts bold'>Project Name : To Do Tracker</p>
            </div>
            <div className='desc'>
              <p className='proj-texts'>
                A space-themed task management application,
                the user can easily identify done or still pending activities.
              </p>
            </div>
            <div className='tech'>
              <p className='proj-texts'>Technology Stacks Used:</p>
              <div className='tech-images'>
                <img
                  className="tech-display"
                  src={require("../images/css.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/react2.png")}
                  alt="logo"
                />
              </div>
            </div>
            <div className='code'>
              <p className='proj-texts'>See Code:</p>
              <a className="github" href='https://github.com/rererereyds/react-to-do-app' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <div className='demo'>
              <p className='proj-texts'>See Demo:</p>
              <a className="heroku1" href='https://63687b4d52cfab642a9f307a--playful-dragon-d7df7b.netlify.app/' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
              </a>
            </div>
          </div>

          <div className='proj3-container'>
            <a className='image' href='https://reyda-resto-app-project.herokuapp.com/' target="_blank">
              <img
                className="proj-image"
                src={require("../images/proj3.png")}
                alt="logo"
              />
            </a>
            <div className='name'>
              <p className='proj-texts bold'>Project Name : Mexican Resto</p>
            </div>
            <div className='desc'>
              <p className='proj-texts'>
                An e-commerce application for a mexican-themed restaurant.
                It has two interfaces that satisfy the needs of online sellers and buyers.
              </p>
            </div>
            <div className='tech'>
              <p className='proj-texts'>Technology Stacks Used:</p>
              <div className='tech-images'>
                <img
                  className="tech-display"
                  src={require("../images/css.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/react2.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/nodejs2.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/express2.png")}
                  alt="logo"
                />
              </div>
            </div>
            <div className='code'>
              <p className='proj-texts'>See Code:</p>
              <a className="github" href='https://github.com/rererereyds/restaurant-app-fullstack' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <div className='demo'>
              <p className='proj-texts'>See Demo:</p>
              <a className="heroku1" href='https://reyda-resto-app-project.herokuapp.com/' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
              </a>
            </div>
          </div>

          <div className='proj4-container'>
            <a className='image' href='https://reyda-medrec-project-fullstack.herokuapp.com/' target="_blank">
              <img
                className="proj-image"
                src={require("../images/proj4.png")}
                alt="logo"
              />
            </a>
            <div className='name'>
              <p className='proj-texts bold'>Project Name : MedRec</p>
            </div>
            <div className='desc'>
              <p className='proj-texts'>
                A application that serves as electronic medical record for patients.
                Target users are hospital staffs.
              </p>
            </div>
            <div className='tech'>
              <p className='proj-texts'>Technology Stacks Used:</p>
              <div className='tech-images'>
                <img
                  className="tech-display"
                  src={require("../images/css.png")}
                  alt="logo"
                />
                <img
                  className="tech-display"
                  src={require("../images/bootstrap.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/react2.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/nodejs2.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/express2.png")}
                  alt="logo"
                />
                <img
                  className="tech1-display"
                  src={require("../images/mongodb2.png")}
                  alt="logo"
                />
              </div>
            </div>
            <div className='code'>
              <p className='proj-texts'>See Code:</p>
              <a className="github" href='https://github.com/rererereyds/medrec-app-fullstack' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <div className='demo'>
              <p className='proj-texts'>See Demo:</p>
              <a className="heroku1" href='https://reyda-medrec-project-fullstack.herokuapp.com/' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-window-fullscreen deploy-icon" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects