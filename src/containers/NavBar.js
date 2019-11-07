import React, { Component } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

export class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <ScrollIntoView selector=".about" className="aboutNav"><p >About</p></ScrollIntoView>
                <ScrollIntoView selector=".experience" className="experienceNav"><p >Experience</p></ScrollIntoView>
                <ScrollIntoView selector=".project" className="projectNav"><p>Project</p></ScrollIntoView>
                <ScrollIntoView selector=".contact" className="contactNav"><p>Contact</p></ScrollIntoView>
            </div>
        )
    }
}

export default NavBar