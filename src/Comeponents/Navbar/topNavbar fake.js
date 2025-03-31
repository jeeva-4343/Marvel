import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../Images/logo.png';
import { IoPersonCircleSharp, IoSearchSharp, IoMenu } from "react-icons/io5";
import './topNavbar.css';

export default function MarvelNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" className="p-0">
        <Container style={{ border: '1px solid  #393939', width: '80%' }} className="d-flex align-items-center justify-content-between">
          {/* Left Side - Login, Sign Up */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="d-lg-none">
            <IoMenu size={25} />
          </Navbar.Toggle>
          <Nav className="me-auto d-none d-lg-flex align-items-center">
            <div className="text-white pt-1">
              <IoPersonCircleSharp size={25} />
            </div>
            <Nav.Link href="#login" className="text-white top-name">LOG IN <span style={{ marginLeft: '10px', fontWeight: '100' }} className="text-white ">|</span></Nav.Link>
            <Nav.Link href="#signup" className="text-white top-name">SIGN UP</Nav.Link>
          </Nav>

          {/* Center - Logo/Image */}
          <Navbar.Brand href="#home" className="mx-auto p-0">
            <img 
              src={logo}
              alt="Marvel Logo" 
              height="50"
              className="d-inline-block align-top brand-image"
            />
          </Navbar.Brand>

          {/* Right Side - Search Icon and Marvel Unlimited Subscribe for All Devices */}
          <div className="text-white pt-2 d-none d-lg-block">
            <Button variant="dark" className="top-name ms-2">MARVEL UNLIMITED <br /> <span style={{ fontSize: '10px' }}>SUBSCRIBE</span></Button>
            <IoSearchSharp size={25} />
          </div>

          {/* Search Icon for Smaller Devices */}
          <div className="text-white pt-2 d-lg-none ms-2">
            <IoSearchSharp size={25} />
          </div>
        </Container>
      </Navbar>

      {/* MenuBar for Navigation Links */}
      <Navbar bg="black" variant="dark" expand="lg" className="p-0">
        <Container className="top-name p-1">
          <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
            {/* Center - Navigation Links */}
            <Nav className="mx-auto">
              {['NEWS', 'COMICS', 'CHARACTERS', 'MOVIES', 'TV SHOWS', 'GAMES', 'VIDEOS', 'MORE'].map((item) => (
                <Nav.Link key={item} href={`#${item.toLowerCase()}`} className="text-white menuNav">
                  {item}
                  {/* <div className="hover-content">Content for {item}</div> */}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}