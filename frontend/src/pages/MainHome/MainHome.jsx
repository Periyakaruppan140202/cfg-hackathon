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
import NavBars from "../../components/NavBars";

const MainHome = () => {
  const { id } = useParams();
  return (
    <>
      <NavBars />
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          {id == 2 ? (
            <Chart2 />
          ) : id == 3 ? (
            <Chart3 />
          ) : id == 4 ? (
            <Chart4 />
          ) : (
            <Chart />
          )}
        </div>
      </div>
    </>
  );
};

export default MainHome;
