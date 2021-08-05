import React from "react";
import "../css/navbar.css";
import logo from "../img/logo.png"

export const Navbar = () => {
    const style ={
        'background-color': '#000000',
      }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" style={style}>
          <img src={logo} alt="" class="img-responsive" />
        
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Become a Member
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
      </nav>
    </>
  );
};
