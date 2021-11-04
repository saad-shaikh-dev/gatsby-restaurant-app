import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
    return (
        <div className="header">
            <Link className="title" to="/"><h1>Rosso's Italian</h1></Link>
            <a className="menu-button" href="#sidenav">
                Menu
            </a>
        </div>
    )
}

export default Navbar
