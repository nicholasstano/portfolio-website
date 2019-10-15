import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link className="navbar-link" to="/about">About</Link>
                <Link className="navbar-link" to="/contact">Contact</Link>
            </div>
        )
    }
}

export default NavBar
