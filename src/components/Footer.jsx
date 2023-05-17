import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.css"

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © Iffath Fatima</span>
        </Col>
        <Col md="4" className="footer-body">
          <span>Site created with React | Javascript | HTML | CSS</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
