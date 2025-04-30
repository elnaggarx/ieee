import React from 'react'
import HeroWithSlope from '../components/HeroWithSlope/HeroWithSlope'
import "../css/aboutStyles.css"
import MeetTheBoard from '../components/MeetTheBoard/MeetTheBoard'
const About = () => {
  return (
    <div className='about'>
      <HeroWithSlope pName="About Us"></HeroWithSlope>
      <div className='what-is-ieee-text'>
        <h1>What is IEEE?</h1>
        <p>IEEE is the world’s largest technical professional organization, committed to advancing technology in all fields of engineering. With over 3,565 student branches across colleges and universities in more than 100 countries, IEEE empowers the next generation of innovators and leaders.</p>
      </div>
      <div className='about-ieee-sb-text'>
        <h1>ABOUT IEEE AAST SB</h1>
        <p>The IEEE AAST Cairo Student Branch, established in 2012, currently boasts over 150 active members. We serve a vibrant community of more than 7,500 students across various faculties on our campus, as well as over 60 IEEE Student Branches across Egypt. Our core mission is to enhance students’ skills and bridge the gap between theoretical knowledge and practical application in engineering.</p>
        

      </div>
      <MeetTheBoard></MeetTheBoard>
    </div>
  )
}

export default About
