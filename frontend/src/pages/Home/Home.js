import React from "react";
import NavBars from "../../components/NavBars";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
function Home(props) {
  return (
    <div>
      <NavBars />
      <div>
        <Row>
          <Col>
            {" "}
            <Card
              className="shadow p-2   mt-4 bg-white rounded"
              style={{
                width: "25rem",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <Card.Img
                style={{ height: "250px" }}
                variant="top"
                src="/images/datavisual.jpg"
              />
              <Card.Body>
                <Card.Title>PROVIDE DATA INSIGHTS</Card.Title>
                <Card.Text className="mt-3">
                  Easy and strcutured way of uploading excels and achieve
                  variety of Interactive visualizations.
                </Card.Text>
              </Card.Body>
              <button className="buttonOfHome">Go somewhere</button>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card
              className="shadow p-2 mt-4 bg-white rounded"
              style={{ width: "25rem", textAlign: "center", margin: "auto" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="/images/fellowAnalytic.jpg"
              />
              <Card.Body>
                <Card.Title>INDIVIDUAL FELLOW ANALYTICS</Card.Title>
                <Card.Text className="mt-3">
                  Advanced Analytics to assess each fellow so as to enable wider
                  view of Organization
                </Card.Text>
              </Card.Body>
              <button className="buttonOfHome">Go somewhere</button>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card
              className="shadow p-2 mt-4 bg-white rounded"
              style={{ width: "25rem", textAlign: "center", margin: "auto" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="/images/phone.jpg"
              />
              <Card.Body>
                <Card.Title>EFFICIENT DATA COLLECTION</Card.Title>
                <Card.Text className="mt-3">
                  Uniquely designed Automatic Excel Data Error Indicator. Simple
                  And Robust Interface for new systems
                </Card.Text>
              </Card.Body>
              <button className="buttonOfHome">Go somewhere</button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
