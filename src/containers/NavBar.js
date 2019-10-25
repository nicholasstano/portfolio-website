import React, { Component } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

export class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <ScrollIntoView selector=".about"><p>About</p></ScrollIntoView>
                <ScrollIntoView selector=".experience"><p>Experience</p></ScrollIntoView>
                <ScrollIntoView selector=".project"><p>Project</p></ScrollIntoView>
                <ScrollIntoView selector=".contact"><p>Contact</p></ScrollIntoView>
            </div>
        )
    }
}

export default NavBar