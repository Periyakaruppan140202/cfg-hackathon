import React from "react";

import './Excel.css'



const Excel = () => {
        const onChange = (e) => {
            let formData = new FormData();
            try {
              formData.append('excelInput',e.target.files[0]);
            //console.log("10",e.FormData);
            
            
              console.log(formData.get("excelInput"))
            }
            catch (err) {
              console.log("No file recieved");
            }
            
          };
          return (
            <>
              <input className="input" type="file" onChange={onChange} />
            </>
          );
    };
    
   


export default Excel;