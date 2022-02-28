import React,{useState,useEffect} from 'react'
import Card from './Card'
import Comments from './Comments'
import "./card.css";
const FullCard = () => {

  
  return (
    <div>

      <Card>
        <Comments
          author="mahdi"
          date="friday at 5pm"
          text="the reason we are here"  
            />
      </Card>

    </div>
  )
}


export default FullCard
