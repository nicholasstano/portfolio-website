import React, { Component } from 'react'
var stano = require('../images/stano.png');
export class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <h1>Nicholas Stano</h1>
                <div className="story-photo">
                    <p>I found web development through a friend and as a former teacher I love continuing to learn. Web development gives me the opportunity to continue to grow and learn through various projects.</p>
                    <img src={stano} className="intro-image" alt="Stano" />
                </div>
                <p>I have been working with Ruby, Rails, JavaScript, React, SQL, HTML, CSS</p>
            </div>
        )
    }
}

export default Introduction
