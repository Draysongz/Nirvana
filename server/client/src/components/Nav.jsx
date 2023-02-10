import React from 'react'
import './nav.css'
import logo from '../Utility/firstv.png'
const Nav = () => {
  return (
    <div>
      <nav>
    <img src={logo} alt="Logo" />
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <button ><a href='/login'>Enroll now</a></button>
  </nav>
    </div>
  )
}

export default Nav
