import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBars from "../components/NavBars";
import "../App.css";

const Fellow = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5600/fetchfellows");
      const data = await response.json();
      const key = "FellowName";
      const datas = [
        ...new Map(data.map((item) => [item[key], item])).values(),
      ];
      setData(datas);
      console.log(datas);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavBars />
      <Row xs={1} md={2} className="g-4">
        {data &&
          data.map((item) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  margin: "50px auto 10px",
                  textAlign: "center",
                }}
                className="bg-dark text-white cards"
              >
                <Card.Body>
                  <Card.Title>{item.FellowName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.CenterName}
                  </Card.Subtitle>
                  <Card.Text>
                    Total Students:{" "}
                    {
                      item.Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center
                    }
                  </Card.Text>
                  <Card.Text>
                    Students with 80%+ Attendance:{" "}
                    {
                      item.Number_of_the_Students_attended_classes_regularly_More_than_80_attendance
                    }
                  </Card.Text>
                  <Card.Link href="#">Detail Profile</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
      </Row>
    </>
  );
};

export default Fellow;
