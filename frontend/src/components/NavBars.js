import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.jpg";
import "../App.css";
const NavBars = () => {
  return (
    //Create Navbar
    <nav
      className="navbar navbar-expand-lg navbar-light pl-2"
      style={{ backgroundColor: "#F3F2EF" }}
    >
      <p className="p-2"></p>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="anubhuti" height="40px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/fellow">
              Fellow
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Data Analysis
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/form">
              Add Form
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/upload">
              Upload Excel Sheet
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBars;
