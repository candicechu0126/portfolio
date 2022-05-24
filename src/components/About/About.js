import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Otherstack from "./Otherstack";
import Aboutcard from "./AboutCard";
import aboutImg from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";
import Hardwarestack from "./Hardwarestack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={aboutImg}
              alt="about"
              className="img-fluid card-about-img"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          <strong className="purple">Hardware</strong> I use
        </h1>
        <Hardwarestack />
        <h1 className="project-heading">
          <strong className="purple">Other</strong> I use
        </h1>
        <Otherstack />
      </Container>
    </Container>
  );
}

export default About;
