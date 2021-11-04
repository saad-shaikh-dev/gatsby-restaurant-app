import { Link } from 'gatsby'
import React from 'react'

const SideNav = () => {
    return (
        <div className="sidenav" id="sidenav">
            <a className="button-close" href="#">x</a>
            <Link to="/#">Top</Link>
            <Link to="#main-courses">Main Course</Link>
            <Link to="#desserts">Desserts</Link>
            <Link to="#drinks">Drinks</Link>
            <a className="white-button" href="#booking">Book a table!</a>
        </div>
    )
}

export default SideNav
