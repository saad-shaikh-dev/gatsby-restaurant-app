import { Link } from 'gatsby'
import React, { Fragment } from 'react'

const SideNav = () => {
    return (
        <Fragment>
            <input className="nav-toggle" type="checkbox" />
            <label className="nav-toggle-label">Menu</label>
            <div className="sidenav" id="sidenav">
                <Link to="/#">Top</Link>
                <Link to="#main-courses">Main Course</Link>
                <Link to="#desserts">Desserts</Link>
                <Link to="#drinks">Drinks</Link>
                <a className="white-button" href="#booking">Book a table!</a>
            </div>
        </Fragment>
    )
}

export default SideNav
