import React from 'react'

import Earth from "../images/Earth.png"

import "../styling/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Earth} alt="logo" />
        <p>my travel journal</p>
    </div>
  )
}

export default Navbar