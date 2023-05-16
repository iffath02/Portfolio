import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useState } from "react"
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai"
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg"
import { BsFillPersonLinesFill } from "react-icons/bs"

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener("scroll", scrollHandler)

  return (
    <div>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded")
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/#home"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/#about"
                  onClick={() => updateExpanded(false)}
                >
                  <BsFillPersonLinesFill style={{ marginBottom: "2px" }} />{" "}
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/#projects"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/#skills"
                  onClick={() => updateExpanded(false)}
                >
                  <GiSkills style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => updateExpanded(false)}>
                  <button
                    className="resume-link"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/drive/u/0/folders/1GSBxXYy_6Nq-nxmRrQn3iYbK75Q0kzIp",
                        "_blank"
                      )
                    }
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </button>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/#contact"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
                  Me
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="nav-bar" variant="dark">
        <Container className="container">
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className=" checking">
            <Nav.Link style={{ color: "white" }} as={Link} to="/#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/#about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/#projects">
              Projects
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/#skills">
              Skills
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  )
}

export default NavBar
