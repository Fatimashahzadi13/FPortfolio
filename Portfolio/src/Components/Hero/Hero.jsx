import React from 'react';
import './Hero.css';
import profile_img from '../../assets/circle.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img 
        src={profile_img}
        alt=" "
        className="hero-img"
      />
      <h1 className="hero-title">Frontend Developer</h1>
      <p className="hero-description">
      "Hi, I'm Fatima Shahzadi,a passionate frontend developer focused on building visually appealing and user-friendly websites. I specialize in HTML, CSS, JavaScript, and responsive design, and I'm eager to continue learning and growing my skills in the ever-evolving world of web development."
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
