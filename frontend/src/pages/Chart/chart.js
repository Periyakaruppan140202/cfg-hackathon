import React from "react";
import CanvasJSReact from "./canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function chart(props) {
  const fetchChart1 = async () => {
    const res = await fetch("http://localhost:5600/chart1");
    const data = await res.json();
    console.log(data);
  };
  const pieoptions = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Basic Column Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { y: 18, label: "No. Of School Children Identified" },
          { y: 49, label: "Children Enrolled In Learning Center" },
          {
            y: 9,
            label: "Meetings on vision setting reflection and selfawareness",
          },
          { y: 5, label: "Training on classroom intervention Values" },
          { y: 19, label: "Community visits made to identify local problems" },
          {
            y: 39,
            label: "Community event organised to mobilize stakeholders",
          },
          { y: 5, label: "Parents attended training programs" },
          { y: 19, label: "Parents participated in awareness campaigns" },
          { y: 39, label: "Members attended program organized" },
          { y: 5, label: "Parents visited NGO" },
          { y: 19, label: "Conversations with fellows" },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={pieoptions} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
export default chart;
