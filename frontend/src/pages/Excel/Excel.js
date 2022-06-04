import React from "react";
import NavBars from "../../components/NavBars";
import "./Excel.css";

const Excel = () => {
  const onChange = (e) => {
    let formData = new FormData();
    try {
      formData.append("excelInput", e.target.files[0]);
      //console.log("10",e.FormData);

      console.log(formData.get("excelInput"));
    } catch (err) {
      console.log("No file recieved");
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
