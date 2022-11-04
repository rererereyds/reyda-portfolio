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
    fetch("Full Stack Web Developer  Reydalin R. Barroso.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
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
                Technology stacks knowledgeable with:
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
        <div className="resume-container-css">
          <div className="downloadResume" onClick={downloadResume}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-download download-icon-css" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <p className="download-text-css">Download Resume</p>
          </div>
        </div>
        <div className="linkedin-container-css">
          <a className="linkedin-css" href="https://www.linkedin.com/in/reydalin-barroso-2a866a24b/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>
        <div className="facebook-container-css">
          <a className="facebook-css" href="https://www.facebook.com/rererereyds/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
        </div>
        <div className="instagram-container-css">
          <a className="instagram-css" href="https://www.instagram.com/rererereyds/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
        </div>
        <div className="reyda-image-container-css">
          <img
            className="reyda-image-css"
            src={require("../images/reyda.png")}
            alt="logo"
          />
        </div>
        <div className="design-image-container-css">
          <img
            className="design-image-css"
            src={require("../images/design.png")}
            alt="logo"
          />
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
