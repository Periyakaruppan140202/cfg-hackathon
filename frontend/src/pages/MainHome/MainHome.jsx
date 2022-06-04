import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
// import Widgets from "../../components/widgets/Widgets";
// import Featured from "../../components/featured/Featured";
// import List from "../../components/List/List";
// import { searchFunc, searchresult } from "../Apicall";
import "./home.scss";

// import ScatterPlot from "../../components/chart/Chart";

// import { useSelector } from "react-redux";
// import { ScatterPlot } from "@mui/icons-material";
const MainHome = () => {
  // const totalblogfount = useSelector((state) => state.blogcount.blog);
  // const [blogdata, setBlogdata] = useState([]);
  // const searchparams = () => {
  //   if (searchresult.length > 0) {
  //     setBlogdata(searchresult[0]);
  //   } else {
  //     setBlogdata(blogdata);
  //   }
  // };
  // const getrecentblogs = () => {
  //   axios.get("http://localhost:8080/api/v1/blog/6latestBlogs").then((res) => {
  //     const result = res.data.data;

  //     setBlogdata(result);
  //   });
  // };
  // useEffect(() => {
  //   getrecentblogs();
  //   searchparams();
  // }, []);
  //   const scatterdata = [
  //     { x: 1, y: 23 },
  //     { x: 2, y: 3 },
  //     { x: 3, y: 15 },
  //     { x: 4, y: 35 },
  //     { x: 5, y: 45 },
  //     { x: 6, y: 25 },
  //     { x: 7, y: 17 },
  //     { x: 8, y: 32 },
  //     { x: 9, y: 43 },
  // ];

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default MainHome;
