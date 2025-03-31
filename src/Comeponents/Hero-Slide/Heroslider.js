import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css'; // Create this CSS file for custom styles

// Import local images
import heroImage1 from '../../Images/hero1.jpg'; // Adjust the path as necessary
import heroImage2 from '../../Images/hero2.jpg'; // Adjust the path as necessary
import heroImage3 from '../../Images/hero3.jpg'; // Adjust the path as necessary
import { Container } from "react-bootstrap";

const heroData = [
  {
    imageUrl: heroImage1,
    title: "MOCN KNIGHT",
    description: "Tomorrow Re-release at 11PM."
  },
  {
    imageUrl: heroImage2,
    title: "AVENGERS FAMILY-6",
    description: "SUN-25 ZEON at 10.30AM."
  },
  {
    imageUrl: heroImage3,
    title: "THE MARVELS",
    description: "CINEMATIC UNIVERSE."
  }
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set the speed for autoplay (in milliseconds)
  };

  return (
    <Container fluid className="p-0">
      <div className="hero-slider">
        <Slider {...settings}>
          {heroData.map((hero, index) => (
            <div key={index} className="hero-slide">
              <img src={hero.imageUrl} alt={hero.title} className="hero-image" />
              <div className="hero-content">
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default HeroSlider;
