import { Container } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"
import "./skills.css"
import "../assets/css/devicon.min.css"

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1
          style={{ textAlign: "center", color: "white" }}
          className="project-heading"
        >
          Professional <strong style={{ color: "white" }}>Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-react-original-wordmark colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-javascript-plain colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-html5-plain-wordmark colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-css3-plain-wordmark colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-npm-original-wordmark colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-jest-plain colored"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i
              style={{ color: "white" }}
              class="devicon-github-original-wordmark"
            ></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i
              style={{ color: "white" }}
              class="devicon-express-original-wordmark"
            ></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-postgresql-plain-wordmark colored"></i>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Skillset
