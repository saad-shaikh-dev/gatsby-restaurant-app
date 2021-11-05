import React from 'react'
import { Link } from 'gatsby'

const Hero = () => {
    return (
        <div className="hero light-text" >
            <Link className="title" to="/"><h1>Rosso's Italian</h1></Link>
            <div className="hero-div">
                <h2>Authentic Italian Cuisine</h2>
                <p>Dine like you're in Milan</p>
                <a className="red-button" href="#booking">Book a table!</a>
            </div>
        </div>
    )
}

export default Hero
