import React from 'react'

import Card from './Card'
import Data from "../Data/Data"

import "../styling/List.css"

const List = () => {
    const cards = Data.map(item => {
        return(
            <Card 
                item = {item}
            />     
        )
    })
  
    return (
        <div className='list'>
            {cards}
        </div>
    )
}

export default List