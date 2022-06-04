// import React from "react";
// import CanvasJSReact from "./canvasjs.react"

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

// var chart2 = new CanvasJS.Chart("chartContainer", {
// 	animationEnabled: true,
// 	title:{
// 		text: "Crude Oil Reserves vs Production, 2016"
// 	},	
// 	axisY: {
// 		title: "Billions of Barrels",
// 		titleFontColor: "#4F81BC",
// 		lineColor: "#4F81BC",
// 		labelFontColor: "#4F81BC",
// 		tickColor: "#4F81BC"
// 	},
// 	axisY2: {
// 		title: "Millions of Barrels/day",
// 		titleFontColor: "#C0504E",
// 		lineColor: "#C0504E",
// 		labelFontColor: "#C0504E",
// 		tickColor: "#C0504E"
// 	},	
// 	toolTip: {
// 		shared: true
// 	},
// 	legend: {
// 		cursor:"pointer",
// 		itemclick: toggleDataSeries
// 	},
// 	data: [{
// 		type: "column",
// 		name: "Proven Oil Reserves (bn)",
// 		legendText: "Proven Oil Reserves",
// 		showInLegend: true, 
// 		dataPoints:[
// 			{ label: "Saudi", y: 266.21 },
// 			{ label: "Venezuela", y: 302.25 },
// 			{ label: "Iran", y: 157.20 },
// 			{ label: "Iraq", y: 148.77 },
// 			{ label: "Kuwait", y: 101.50 },
// 			{ label: "UAE", y: 97.8 }
// 		]
// 	},
// 	{
// 		type: "column",	
// 		name: "Oil Production (million/day)",
// 		legendText: "Oil Production",
// 		axisYType: "secondary",
// 		showInLegend: true,
// 		dataPoints:[
// 			{ label: "Saudi", y: 10.46 },
// 			{ label: "Venezuela", y: 2.27 },
// 			{ label: "Iran", y: 3.99 },
// 			{ label: "Iraq", y: 4.45 },
// 			{ label: "Kuwait", y: 2.92 },
// 			{ label: "UAE", y: 3.1 }
// 		]
// 	}]
// });
// chart2.render();

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