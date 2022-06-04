import React from "react";
import CanvasJSReact from "./canvasjs.react"

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function chart(props) {
  const pieoptions = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Event Donations",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Beach Cleaning" },
          { y: 49, label: "Blood Donation" },
          { y: 9, label: "River Rejuvenation" },
          { y: 5, label: "Teach for India" },
          { y: 19, label: "Blanket Donation" },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={pieoptions} />
    </div>
  );
}

export default chart;
