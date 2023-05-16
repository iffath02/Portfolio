import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Skillset from "../components/Skills"
import Contact from "../components/Contact"
import "./fixedicons.css"
import { MdEmail } from "react-icons/md"
import { BsGithub, BsLinkedin } from "react-icons/bs"

function Layout() {
  const { hash } = useLocation()
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.slice(1))
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleEmailClick = () => {
    const email = "iffathfatima02@gmail.com"
    window.location.href = `mailto:${email}`
  }

  return (
    <div>
      {!isMobileScreen && (
        <div className="fixed-icons">
          <a
            href="https://github.com/iffath02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/iffath-fatima/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="icon" />
          </a>
          <a onClick={handleEmailClick}>
            <MdEmail className="icon" />
          </a>
        </div>
      )}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skillset />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Layout
