import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./home.scss";
import { useParams } from "react-router";
import Chart from "../Chart/chart";
import Chart2 from "../Chart/chart2";
import Chart3 from "../Chart/chart3";
import Chart4 from "../Chart/chart4";

const MainHome = () => {
  const { id } = useParams();
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {id == 0 ? (
          <h1>Welcome</h1>
        ) : id == 1 ? (
          <Chart />
        ) : id == 2 ? (
          <Chart2 />
        ) : id == 3 ? (
          <Chart3 />
        ) : id == 4 ? (
          <Chart4 />
        ) : (
          <h1>Please Select Proper Option</h1>
        )}
      </div>
    </div>
  );
};

export default MainHome;
