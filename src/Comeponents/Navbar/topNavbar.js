import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../Images/logo.png';
import { IoPersonCircleSharp, IoSearchSharp, IoMenu } from "react-icons/io5";
import './topNavbar.css';

export default function MarvelNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const menuItems = [
    {
      name: 'NEWS',
      content: [
        { title: 'Latest News', image: require('../../Images/news-2.jpg') },
        { title: 'Old News', image: require('../../Images/news.jpg') },
        { title: 'Trending News', image: require('../../Images/news-5.jpg') },
        { title: 'Upcoming Releases', image: require('../../Images/comic.jpg') }

      ]
    },
    {
      name: 'COMICS',
      content: [
        { title: 'Latest Comics', image: require('../../Images/comics-0.jpg') },
        { title: 'Top Picks', image: require('../../Images/comics-2.jpg') },
        { title: 'Clips', image: require('../../Images/more-3.jpg') },
        { title: 'Upcoming Releases', image: require('../../Images/comic.jpg') }
      ]
    },
    {
      name: 'CHARACTERS',
      content: [
        { title: 'Popular Characters', image: require('../../Images/character-2.jpg') },
        { title: 'New Additions', image: require('../../Images/character.jpg') },
        { title: 'Man', image: require('../../Images/more-2.jpg') },
      ]
    },
    {
      name: 'MOVIES',
      content: [
        { title: 'Popular Movies', image: require('../../Images/Movie1.jpg') },
        { title: 'New Movies', image: require('../../Images/movie 2.jpg') },
        { title: 'Old Movies', image: require('../../Images/movie-3.jpeg') },

      ]
    },
    {
      name: 'TV SHOWS',
      content: [
        { title: 'Popular Shows', image: require('../../Images/tv.jpg') },
        { title: 'Disney', image: require('../../Images/tv-2.jpeg') },
        { title: 'Old Shows', image: require('../../Images/news.jpg') },

      ]
    },
    {
      name: 'GAMES',
      content: [
        { title: 'Popular Game', image: require('../../Images/game.jpg') },
        { title: 'The Rider', image: require('../../Images/game-2.jpg') },

      ]
    },
    {
      name: 'VIDEOS',
      content: [
        { title: 'Trending', image: require('../../Images/video.jpg') },
        { title: 'The Marbel', image: require('../../Images/video-2.jpg') },
        { title: 'The Pilot', image: require('../../Images/video-3.jpg') },

      ]
    },
    {
      name: 'MORE',
      content: [
        { title: 'Trending', image: require('../../Images/more.jpg') },
        { title: 'Latest', image: require('../../Images/comics-0.jpg') },
        { title: 'Stories', image: require('../../Images/more-2.jpg') },
        { title: 'Clips', image: require('../../Images/more-3.jpg') },

      ]
    }
  ];



  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" className="p-0" style={{borderBottom:'1px solid'}}>
        <Container style={{ border: '1px solid  #393939', width: '80%' }} className="d-flex align-items-center justify-content-between">
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

          <Navbar.Brand href="#home" className="mx-auto p-0">
            <img
              src={logo}
              alt="Marvel Logo"
              height="50"
              className="d-inline-block align-top brand-image"
            />
          </Navbar.Brand>

          <div className="text-white pt-2 d-none d-lg-block">
            <Button variant="dark" className="top-name ms-2" style={{backgroundColor:'unset', border:'none'}}>MARVEL UNLIMITED <br /> <span style={{ fontSize: '10px' }}>SUBSCRIBE</span></Button>
            <IoSearchSharp size={25} />
          </div>

          <div className="text-white pt-2 d-lg-none ms-2">
            <IoSearchSharp size={25} />
          </div>
        </Container>
      </Navbar>

      <Navbar bg="black" variant="dark" expand="lg" className="p-0">
        <Container className=" top-name p-1">
          <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
            <Nav className="mx-auto">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="position-relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Nav.Link href={`#${item.name.toLowerCase()}`} className="text-white menuNav">
                    {item.name}
                  </Nav.Link>
                  {hoveredItem === item.name && (
                    <div className="hover-content" >
                      <div className="cards-container">
                        {item.content.map((subItem, index) => (
                          <div key={index} className="hover-card">
                            <img src={subItem.image} className="card-img-top" alt={subItem.title} />
                            <div className="card-body">
                              <h6 className="card-title">{subItem.title}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}