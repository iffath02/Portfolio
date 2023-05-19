import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Container, Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "./Contact.css"
import { MdEmail } from "react-icons/md"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Contact = () => {
  const form = useRef()
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = e => {
    e.preventDefault()

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true)
    } else {
      emailjs
        .sendForm(
          "service_aht4esk",
          "template_d9934kv",
          form.current,
          "ptL0IBhoVOxiLncBH"
        )
        .then(
          result => {
            console.log(result.text)
            setDone(true)
          },
          error => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <Container style={{ paddingTop: "50px" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "110px" }}
        className="project-heading"
      >
        <strong style={{ color: "white" }}>Contact</strong>
      </h1>
      <Row>
        <Col md={6} className="c-left">
          <h4 style={{ marginBottom: 40 }}>
            Whether you're interested in collaborating or simply want to reach
            out and say hello, feel free to get in touch. I'm always available
            and eager to hear from you.
          </h4>
          <div className="contact-details">
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <a
                style={{ color: "white" }}
                href="mailto:iffathfatima02@gmail.com"
              >
                iffathfatima02@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <AiFillLinkedin className="contact-icon" />
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/iffath-fatima/"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <AiFillGithub className="contact-icon" />
              <a style={{ color: "white" }} href="https://github.com/iffath02">
                GitHub
              </a>
            </div>
          </div>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                "Thanks for contacting me and be sure I have recieved your mail. If there are any specific inquiries or important requirements that require my attention, please message me on LinkenIn, and I will promptly respond."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
