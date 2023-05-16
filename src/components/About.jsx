import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import banner from "../dev.png"
import "./about.css"

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="yellow"> About</span>
            </h1>
            <p className="home-about-body">
              I am a passionate{" "}
              <span className="yellow">software engineer</span>, who thrives on
              challenges and is constantly seeking opportunities to learn new
              things.
              <br />
              <br />I recently graduated from General Assembly's Software
              Engineering Immersive program, and have gained experience in using
              <b className="yellow"> React, Node.js, Express.js, PostgreSQL </b>
              <br />
              <br />I am also skilled in using
              <b className="yellow"> CSS, Bootstrap, and GitHub </b>
              <br />
              <br />
              My experience in developing
              <b className="yellow"> full-stack applications </b>
              has equipped me with the ability to design and develop
              <b className="yellow"> user-centric web solutions.</b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={banner} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
