import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiXampp,
  SiEclipseide,
 
Siunity,
SiUnity
} from "react-icons/si";
import {
  
 diEclipseide
 
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity/>
      </Col>
    </Row>
  );
}

export default Toolstack;
