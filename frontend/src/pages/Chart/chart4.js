import React from "react";
import CanvasJSReact from "./canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoint;
		var total;
        function chart4(props) {
		const options = {
			theme: "dark2",
			animationEnabled: true,
			title:{
				text: "Recruitment Analysis"
			},
			data: [{
				type: "funnel",
				indexLabel: "{label} - {y}",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				neckWidth: 20,
				neckHeight: 0,
				valueRepresents: "area",
				dataPoints: [
					{ y: 265, label: "Applications" },
					{ y: 134, label: "Interviewed" },
					{ y: 48, label: "Assessment" },
					{ y: 26, label: "Hired" }
				]
			}]
		}
		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
			if(i == 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
		return (
			<div>
				<CanvasJSChart options = {options}
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
export default chart4;