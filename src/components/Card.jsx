import React from 'react'

import Location from "../images/Location.png"

import "../styling/Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.item.image} alt="" />
        <div className='text'>
            <div className='location'>
                <img src={Location} alt="" />
                <p>{props.item.country}</p>
                <a href="">View on Google Maps</a>
            </div>
            <h1>{props.item.location}</h1>
            <p className='date'>{props.item.dateStart} - {props.item.dateEnd}</p>
            <p>{props.item.description}</p>
        </div>
    </div>
  )
}

export default Card