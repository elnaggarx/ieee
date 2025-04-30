import React from 'react'

const BoardMemberCard = (props) => {
  return (
    <div className='board-member-card'>
        <div className='board-member-overlay'></div>
      <img src={props.image} alt="error" />
      <h1 className='board-member-title'>{props.title}</h1>
      <h2 className='board-member-name'>{props.name}</h2>
    </div>
  )
}

export default BoardMemberCard
