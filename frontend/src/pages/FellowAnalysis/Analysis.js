import React from "react";
import "./Analysis.css";
import CanvasJSReact from "../Chart/canvasjs.react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Analysis(props) {
  const pieoptions = {
    animationEnabled: true,
    title: {
      text: "Total Classes Conducted",
      fontFamily: "arial black",
      //   fontColor: "#695A42",
    },
    axisX: {
      interval: 1,
      intervalType: "month",
    },
    axisY: {
      valueFormatString: "#0hrs",
      gridColor: "#B6B1A8",
      tickColor: "#B6B1A8",
    },
    // toolTip: {
    //   shared: true,
    //   content: toolTipContent,
    // },
    data: [
      {
        type: "stackedColumn",
        showInLegend: true,
        color: "#b284be",
        name: "Hindi",
        dataPoints: [
          { y: 6, x: new Date(2010, 0) },
          { y: 12, x: new Date(2010, 1) },
          { y: 15, x: new Date(2010, 2) },
          { y: 5, x: new Date(2010, 3) },
          { y: 7, x: new Date(2010, 4) },
          { y: 8, x: new Date(2010, 5) },
          { y: 3, x: new Date(2010, 6) },
          { y: 18, x: new Date(2010, 7) },
          { y: 12, x: new Date(2010, 8) },
          { y: 9, x: new Date(2010, 9) },
          { y: 6, x: new Date(2010, 10) },
          { y: 7, x: new Date(2010, 11) },
        ],
      },
      {
        type: "stackedColumn",
        showInLegend: true,
        color: "#880085",
        name: "English",
        dataPoints: [
          { y: 3, x: new Date(2010, 0) },
          { y: 2, x: new Date(2010, 1) },
          { y: 5, x: new Date(2010, 2) },
          { y: 15, x: new Date(2010, 3) },
          { y: 11, x: new Date(2010, 4) },
          { y: 18, x: new Date(2010, 5) },
          { y: 6, x: new Date(2010, 6) },
          { y: 8, x: new Date(2010, 7) },
          { y: 2, x: new Date(2010, 8) },
          { y: 19, x: new Date(2010, 9) },
          { y: 3, x: new Date(2010, 10) },
          { y: 7, x: new Date(2010, 11) },
        ],
      },
      {
        type: "stackedColumn",
        showInLegend: true,
        color: "#400040",
        name: "Evs",
        dataPoints: [
          { y: 7, x: new Date(2010, 0) },
          { y: 8, x: new Date(2010, 1) },
          { y: 4, x: new Date(2010, 2) },
          { y: 5, x: new Date(2010, 3) },
          { y: 13, x: new Date(2010, 4) },
          { y: 11, x: new Date(2010, 5) },
          { y: 3, x: new Date(2010, 6) },
          { y: 9, x: new Date(2010, 7) },
          { y: 12, x: new Date(2010, 8) },
          { y: 9, x: new Date(2010, 9) },
          { y: 13, x: new Date(2010, 10) },
          { y: 4, x: new Date(2010, 11) },
        ],
      },
      {
        type: "stackedColumn",
        showInLegend: true,
        color: "#200020",
        name: "Maths",
        dataPoints: [
          { y: 17, x: new Date(2010, 0) },
          { y: 4, x: new Date(2010, 1) },
          { y: 7, x: new Date(2010, 2) },
          { y: 15, x: new Date(2010, 3) },
          { y: 3, x: new Date(2010, 4) },
          { y: 5, x: new Date(2010, 5) },
          { y: 13, x: new Date(2010, 6) },
          { y: 8, x: new Date(2010, 7) },
          { y: 2, x: new Date(2010, 8) },
          { y: 3, x: new Date(2010, 9) },
          { y: 3, x: new Date(2010, 10) },
          { y: 14, x: new Date(2010, 11) },
        ],
      },
    ],
  };
  function toolTipContent(e) {
    // var str = "";
    // var total = 0;
    // var str2, str3;
    // for (var i = 0; i < e.entries.length; i++) {
    //   var str1 =
    //     '<span style= "color:' +
    //     e.entries[i].dataSeries.color +
    //     '"> ' +
    //     e.entries[i].dataSeries.name +
    //     "</span>: $<strong>" +
    //     e.entries[i].dataPoint.y +
    //     "</strong>bn<br/>";
    //   total = e.entries[i].dataPoint.y + total;
    //   str = str.concat(str1);
    // }
    // str2 =
    //   '<span style = "color:DodgerBlue;"><strong>' +
    //   e.entries[0].dataPoint.x.getFullYear() +
    //   "</strong></span><br/>";
    // total = Math.round(total * 100) / 100;
    // str3 =
    //   '<span style = "color:Tomato">Total:</span><strong> $' +
    //   total +
    //   "</strong>bn<br/>";
    // return str2.concat(str).concat(str3);
  }
  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    CanvasJSChart.render();
  }

  const options = {
    animationEnabled: true,
    title: {
      text: "Program Success",
      fontFamily: "arial black",
    },
    axisY: {
      title: "No. of Students",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "Identified",
        showInLegend: true,
        dataPoints: [
          { y: 55, label: "Jan" },
          { y: 50, label: "Feb" },
          { y: 52, label: "Mar" },
          { y: 48, label: "Apr" },
          { y: 35, label: "May" },
          { y: 24, label: "Jun" },
          { y: 25, label: "Jul" },
          { y: 31, label: "Aug" },
          { y: 28, label: "Sept" },
          { y: 39, label: "Oct" },
          { y: 13, label: "Nov" },
          { y: 18, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "Enrolled",
        showInLegend: true,
        dataPoints: [
          { y: 45, label: "Jan" },
          { y: 40, label: "Feb" },
          { y: 42, label: "Mar" },
          { y: 38, label: "Apr" },
          { y: 25, label: "May" },
          { y: 14, label: "Jun" },
          { y: 15, label: "Jul" },
          { y: 21, label: "Aug" },
          { y: 19, label: "Sept" },
          { y: 28, label: "Oct" },
          { y: 10, label: "Nov" },
          { y: 13, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "80%+ Attendance",
        showInLegend: true,
        dataPoints: [
          { y: 35, label: "Jan" },
          { y: 34, label: "Feb" },
          { y: 38, label: "Mar" },
          { y: 28, label: "Apr" },
          { y: 17, label: "May" },
          { y: 11, label: "Jun" },
          { y: 12, label: "Jul" },
          { y: 17, label: "Aug" },
          { y: 14, label: "Sept" },
          { y: 22, label: "Oct" },
          { y: 7, label: "Nov" },
          { y: 8, label: "Dec" },
        ],
      },
    ],
  };
  return (
    <div>
      {" "}
      <div>
        <h1 className="heading">Detail Analysis For Amisha, Rajput</h1>
        <div>
          <div>
            <Container>
              <Row>
                <Col>
                  {" "}
                  <Card
                    className="shadow p-2   mt-4 bg-white rounded"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>34</Card.Title>
                      <Card.Text>Successfull Events</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  <Card
                    className="shadow p-2 mt-4 bg-white rounded"
                    style={{ width: "18rem", textAlign: "center" }}
                  >
                    <Card.Body>
                      <Card.Title>200</Card.Title>
                      <Card.Text>No. Of children bridged</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  <Card
                    className="shadow p-2 mt-4 bg-white rounded"
                    style={{ width: "18rem", textAlign: "center" }}
                  >
                    <Card.Body>
                      <Card.Title>HIGH</Card.Title>
                      <Card.Text>Retention Rate</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  <Card
                    className="shadow p-2 mt-4 bg-white rounded"
                    style={{ width: "18rem", textAlign: "center" }}
                  >
                    <Card.Body>
                      <Card.Title>GOOD</Card.Title>
                      <Card.Text>Communication Skills</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="chartDiv">
          <CanvasJSChart className="mainChart" options={pieoptions} />
        </div>
        <div className="chartDiv">
          <CanvasJSChart className="mainChart" options={options} />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
