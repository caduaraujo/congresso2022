import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from  '../assets/img/gen.png';
import instalogo from  '../assets/img/nav-icon3.svg';
import { useState, useEffect } from "react";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

        </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/gen2brasil/" target="_blank"><img src={instalogo} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }



