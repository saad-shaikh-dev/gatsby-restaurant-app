import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className="hero light-text">
            <Header />
            <div className="hero-div">
                <h2>Authentic Italian Cuisine</h2>
                <p>Dine like you're in Milan</p>
                <a className="red-button" href="#booking">Book a table!</a>
            </div>
        </div>
    )
}

export default Hero
