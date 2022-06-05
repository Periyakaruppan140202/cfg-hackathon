import React from "react";
import NavBars from "../../components/NavBars";
import "./Excel.css";
import { postEndPoint, getEndPoint } from "../../request/request";
import axios from "axios";

const Excel = () => {
  const onChange = async (e) => {
    try {
      let formData = new FormData();
      formData.append("excel", e.target.files[0]);

      const response = await postEndPoint("/uploadExcel", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response) {
        alert("success");
      } else {
        console.log("wrong format");
      }
    } catch (err) {
      if (err.response.status === 401) {
        console.log("error");
      } else {
        console.log(err.response);
      }
    }
  };
  return (
    <>
      <NavBars />
      <div className="line1">
        Want to get some useful insights from EXCEL.??
      </div>
      <div className="line2">
        Upload the Excel sheet with fellow details here:
      </div>

      <div className="A">
        <img src="/images/excel.jpg" alt="excel" />
        <input className="inputUpload input" type="file" onChange={onChange} />
      </div>
    </>
  );
};

export default Excel;
