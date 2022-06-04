import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBars = () => {
  return (
    //Create Navbar
    <nav class="navbar navbar-expand-lg navbar-light bg-light pl-2">
      <a class="navbar-brand p-2" href="#">
        Navbar
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBars;