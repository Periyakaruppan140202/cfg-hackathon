

import React from "react";
import CanvasJSReact from "./canvasjs.react"

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function chart2(props) {

    const pieoptions = {
        exportEnabled: true,
        animationEnabled: true,

    title:{
        text: "attendence data"
    },	
    axisY: {
        title: "enrolled",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC"
    },
    axisY2: {
        title: "attendence",
        titleFontColor: "#C0504E",
        lineColor: "#C0504E",
        labelFontColor: "#C0504E",
        tickColor: "#C0504E"
    },	
    toolTip: {
        shared: true
    },
    legend: {
        cursor:"pointer",
        itemclick: toggleDataSeries
    },
    data: [{
        type: "column",
        name: "enrolled",
        legendText: "enrolled",
        showInLegend: true, 
        dataPoints:[
            { label: "Palra", y: 25 },
            { label: "Badshapur", y: 25 },
            { label: "Badshapur", y: 26 },
            { label: "Badshapur", y: 26},
            { label: "Sohna", y: 24 },
            { label: "Nayagoan", y: 25 }
        ]
    },
    {
        type: "column",	
        name: "children identified",
        legendText: "children identified",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
            { label: "Palra", y: 23},
            { label: "Badshapur", y: 22 },
            { label: "Badshapur", y: 26},
            { label: "Badshapur", y: 20},
            { label: "Sohna", y: 22},
            { label: "Nayagoan", y: 24 }
        ]
    },
    {
        type: "column",	
        name: "attendence",
        legendText: "attendence",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
            { label: "Palra", y: 23},
            { label: "Badshapur", y: 22 },
            { label: "Badshapur", y: 26},
            { label: "Badshapur", y: 20},
            { label: "Sohna", y: 22},
            { label: "Nayagoan", y: 24 }
        ]
    }],
    
};
    
      return (
        <div>
          <CanvasJSChart options={pieoptions} />
        </div>
      );
    
}


function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart2.render();
}


export default chart2;