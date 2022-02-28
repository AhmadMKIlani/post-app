import React from 'react'
import "./card.css";


const Card = (props) => {
  return (
    <div className='cards'>
        <div className="card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
            </div>
        </div>
    </div>
  )
}

export default Card;