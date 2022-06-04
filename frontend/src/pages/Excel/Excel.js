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
      <div className="A">
        You can upload your excel sheet here and continue your Service easily
        with Add Form and Data Analysis.
        <input className="input" type="file" onChange={onChange} />
      </div>
    </>
  );
};

export default Excel;
