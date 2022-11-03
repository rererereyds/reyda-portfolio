import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="position-fixed">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="logo-image-css" src={require("../images/logo.png")} alt="logo"/>
          <button
            className="navbar-toggler border border-info text-info"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
          <div
            // className={
            //   show ? "navbar-collapse collapse" : "navbar-collapse active"
            // }
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link link-text" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-text" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-text" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
