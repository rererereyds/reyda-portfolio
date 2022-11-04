import React, { useState } from "react";
import "./About.css";
import Modal from "react-modal";
import Navigation from "./Navigation";

const About = () => {
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

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch("Full Stack Web Developer  Reydalin R. Barroso.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Full Stack Web Developer  Reydalin R. Barroso.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="about-page-css">
      <div className="about-grid-container-css">
        <div className="logo-container-css">
          <img
            className="logo-image-css"
            src={require("../images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="about-container-css">
          <div className="about-text-container">
            <p className="about-css">About</p>
          </div>
          <div className="information-text-container">
            <p className="information-css">
              Hi! My name is Reydalin Barroso. I am a career-shifter and an
              aspiring Full Stack Web Developer based in the Philippines.
            </p>
            <p className="information-css">
              Web development is a great opportunity for me to do what I love:
              creating and designing. In every tap at keyboard, ideas would be
              brought into existence, and I love that part. I'm always curious
              to learn more when it comes to technologies and creative coding.
            </p>
          </div>
        </div>
        <div className="techstacks-container-css">
          <div className="techstacks-border-css">
            <div className="techstacks-grid-css">
              <p className="techstacks-text-css">
                Technology Stacks Knowledgeable of:
              </p>
              <div className="t1-css">
                <img
                  className="tech-image-css"
                  src={require("../images/html.png")}
                  alt="logo"
                />
              </div>
              <div className=" t2-css">
                <img
                  className="tech-image-css"
                  src={require("../images/css.png")}
                  alt="logo"
                />
              </div>
              <div className="t3-css">
                <img
                  className="tech-image-css"
                  src={require("../images/javascript.png")}
                  alt="logo"
                />
              </div>
              <div className="t4-css">
                <img
                  className="tech-image-css"
                  src={require("../images/bootstrap.png")}
                  alt="logo"
                />
              </div>
              <div className="t5-css">
                <img
                  className="tech-image-css"
                  src={require("../images/react.png")}
                  alt="logo"
                />
              </div>
              <div className="t6-css">
                <img
                  className="tech-image-css"
                  src={require("../images/nodejs.png")}
                  alt="logo"
                />
              </div>
              <div className="t7-css">
                <img
                  className="tech-image-css"
                  src={require("../images/express.png")}
                  alt="logo"
                />
              </div>
              <div className="t8-css">
                <img
                  className="tech-image-css"
                  src={require("../images/mongodb.png")}
                  alt="logo"
                />
              </div>

              <p className="t9-css">HTML</p>
              <p className="t10-css">CSS</p>
              <p className="t11-css">JAVASCRIPT</p>
              <p className="t12-css">BOOTSTRAP</p>
              <p className="t13-css">REACTJS</p>
              <p className="t14-css">NODEJS</p>
              <p className="t15-css">EXPRESSJS</p>
              <p className="t16-css">MONGODB</p>
            </div>
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
        <div className="reyda-image-container-css">
          <img
            className="reyda-image-css"
            src={require("../images/reyda.png")}
            alt="logo"
          />
        </div>
        <div className="resume-container-css">
          <div className="resume-css">
            <button className="downloadResume" onClick={downloadResume}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-download download-icon-css" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
              <p className="download-text-css">Download Resume</p>
            </button>
          </div>
        </div>
        <div className="linkedin-container-css">
          <p>linkedin</p>
        </div>
        <div className="facebook-container-css">
          <p>facebook</p>
        </div>
        <div className="instagram-container-css">
          <p>instagram</p>
        </div>
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
  );
};

export default About;
