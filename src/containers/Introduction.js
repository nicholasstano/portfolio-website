import React, { Component } from 'react'
var stano = require('../images/stano.png');
export class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <h2 className="introduction-header">Nicholas Stano</h2>
                <div className="story-photo">
                    <p>Found Web Development through a friend. As a former teacher I enjoy continuing to learn with Web Development by building projects.</p>
                    <img src={stano} className="intro-image" alt="Stano" />
                </div>
                <p>I have been working with JavaScript, React, SQL, Ruby, Rails, HTML, CSS</p>
            </div>
        )
    }
}

export default Introduction
