import React, { Component } from 'react'
var stano = require('../images/stano1.png');
export class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <h1>Nicholas Stano</h1>
                <p>I found web development through a friend and love figuring out how things work.  I continue to build projects where I am exploring the most effective code that can be written and to add new features.</p>
                <img src={stano} className="intro-image" alt="Stano" />
            </div>
        )
    }
}

export default Introduction
