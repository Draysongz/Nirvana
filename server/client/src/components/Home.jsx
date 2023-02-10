import React from 'react'
import './Home.css'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='Home'>
        <div className="hero">
            <Nav/>
            <div className="hero-text"> 
        <h1>Unlock the Power of <br /> Cryptocurrency with Our Academy</h1>
        <p className="tag">Discover the world of cryptocurrency and unlock new opportunities. <br /> Learn from experts and gain the skills you need to succeed in trading,< br /> investing, and beyond.</p>
        <button className="call">Enroll Now</button>
        </div>
        </div>
     
    </div>
  )
}

export default Home
