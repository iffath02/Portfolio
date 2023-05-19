import { Container, Row, Col } from "react-bootstrap"
import "./home.css"
import Typewriter from "typewriter-effect"
import image from "../picture.jpg"
import Particle from "./particle"

export default function Home() {
  return (
    <div className="home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Iffath Fatima</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Front-end Developer",
                      "Back-end Developer",
                      "Junior Software Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={image}
                alt="home pic"
                className="border img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
/*
{
<Button
  style={{ marginTop: 20 }}
  size="lg"
  variant="outline-success"
>
  Resume
</Button>{" "}
</div> */
