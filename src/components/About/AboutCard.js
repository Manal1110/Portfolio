import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Manal Mehdaoui </span>
             from <span className="purple"> Morocco , Kenitra.</span>
            <br />I am a Senior CS student At Al Akhawayn University, majoring in 
            Computer Science and minoring in business administration.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create something that leaves an indelible mark on the world."{" "}
          </p>
          <footer className="blockquote-footer">Manal Mehdaoui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
