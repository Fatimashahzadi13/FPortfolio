import React from 'react'
import './About.css'
import profile_img from '../../assets/circle.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
       
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>My Experience</p>
                <p></p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "85%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width: "40%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
