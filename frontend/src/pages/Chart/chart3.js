import React from "react";
import CanvasJSReact from "./canvasjs.react";

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function chart3(props) {
    const options = {
        animationEnabled: true,
        title: {
            text: "Involvement"
        },
        
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Parents attended training programs", y: 5 },
                { name: "Parents participated in awareness campaigns", y: 31 },
                { name: "Community event organised to mobilize stakeholders", y: 40 },
                { name: "Members attended program organized", y: 17 },
                { name: "Training on classroom intervention Values", y: 7 }
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}
export default chart3 ;  