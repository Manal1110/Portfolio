import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

import profilePicture from "../../Assets/Resumepic.png";

function ResumeNew() {
  const resumeLink =
    "https://alakhawayn365-my.sharepoint.com/:b:/g/personal/m_mehdaoui_aui_ma/EafjHsPEnRVKvRxIjYIwS4cBs8PRAam69MAW72SY_KFspw?e=yzo0jL";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <img src={profilePicture} alt="Profile" />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
