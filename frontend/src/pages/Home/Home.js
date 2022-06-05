import React from "react";
import NavBars from "../../components/NavBars";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <NavBars />
      <div class="jumbotronn p-5 rounded-lg m-3">
        <h1 class="display-2">Anubhuti Foundation</h1>
        <p class="lead">
          The foundation is trying to create an educational environment for
          underprivileged students by becoming the bridge between schools and
          community.
        </p>
        <hr class="my-4" />
      </div>
      <div>
        <div>
          <section
            className="section section-search"
            style={{
              backgroundImage: `url("/images/excel.jpg") !important`,
            }}
          >
            <div
              className="container"
              style={{
                maxWidth: "95%",
                width: "100%",
                boxShadow: "none",
                background: "transparent",
              }}
            >
              <div className="banner-wrapper m-auto text-center">
                <div className="banner-header">
                  <h1>
                    The Portal <br />
                    of the <span>students</span>, by the <span>students</span>{" "}
                    <br />
                    for the <span>students</span>
                  </h1>
                  <p style={{ marginTop: "30px", color: "#f4eaff" }}>
                    SuccessOverFLOW aims at holistic development of student
                    community
                  </p>
                </div>

                {/* <div className="view-all text-center"><a style={{color:"white"}} className="btn btn-primary">Get Access Now !!!</a></div> */}
              </div>
            </div>
          </section>
        </div>
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
              <Link to="dataanalysis">
                <button className="buttonOfHome">Data Analysis</button>
              </Link>
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
              <Link to="fellow">
                <button className="buttonOfHome">Fellow Data</button>
              </Link>
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
              <Link to="/form">
                <button className="buttonOfHome">Add Form</button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
