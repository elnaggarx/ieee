import React from 'react'
import "./meetTheBoardStyles.css"
import BoardMemberCard from './BoardMemberCard'
import seif from '../../assets/Seif Reda.jpeg'
import rashad from "../../assets/Rashad.jpeg"
import shendo from "../../assets/shendo.jpeg"
import richard from "../../assets/richard.jpeg"
const MeetTheBoard = () => {
  return (
    <div className='meet-the-board'>
      <h1>Meet The Board</h1>
      <div className='cards-container'>
        <BoardMemberCard image={seif} title="Chairman" name="Seif Reda"></BoardMemberCard>
        <BoardMemberCard image={rashad} title="Vice Chairman" name="Omar Rashad" ></BoardMemberCard>
        <BoardMemberCard image={shendo} title="Secretary" name="Shandawily"></BoardMemberCard>
        <BoardMemberCard image={richard} title="Treasurer" name="Youssef Osama"></BoardMemberCard>

      </div>
    </div>
  )
}

export default MeetTheBoard
