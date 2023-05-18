import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "../components/ProjectCard"
import moneyhoncho from "../screenshots/screenshot3.png"
import learninLoop from "../screenshots/learning_loop.png"
import servoApp from "../screenshots/servo-app.png"

import "./projects.css"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 style={{ textAlign: "center" }} className="project-heading">
          <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ textAlign: "center" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneyhoncho}
              isBlog={false}
              title="Money Honcho"
              description="A full-stack application that helps you set-up a budget and keep track of the expenses. Frontend developed using React and backend using Express.js and PostgreSQL"
              ghLink="https://github.com/iffath02/money-honcho-frontend"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learninLoop}
              isBlog={false}
              title="Learning Loop"
              description="A full-stack application that enables users to enhance their skills by accessing a variety of technical courses and engaging in CRUD (Create, Read, Update, Delete) operations. Developed using JavaScript, PostgreSQL, Express, EJS, CSS"
              ghLink="https://github.com/iffath02/elearning-website"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={servoApp}
              isBlog={false}
              title="Servo App"
              description="Collaborated with a team to develop a single page application that utilizes user's current location to find petrol stations and display it using Google Maps API. Developed using JavaScript, PostgreSQL, Express, EJS, CSS"
              ghLink="https://github.com/iffath02/servo-app"
              demoLink="https:/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
