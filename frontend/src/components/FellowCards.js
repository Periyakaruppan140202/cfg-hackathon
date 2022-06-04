import React from "react";
import { Card } from "react-bootstrap";
const FellowCards = (item) => {
  const { FellowName } = item;
  return (
    <>
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>{FellowName}</Card.Header>
          <Card.Body>
            <Card.Title> {FellowName} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default FellowCards;
