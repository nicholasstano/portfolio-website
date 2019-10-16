import React, { Component } from 'react'
var gmail = require('../containers/gmail.png');
var linkedin = require('../containers/linkedin.png');
var github = require('../containers/github.png');


export class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <h1>{null}</h1>
                <h1>Contact</h1>
                <p>845-702-3793</p>
                <a href="mailto:nicholasstano@gmail.com"><img src={gmail} alt="gmail" /></a>
                <a href="https://github.com/nicholasstano"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/nicholas-stano/"><img src={linkedin} alt="linkedin" /></a>
            </div>
        )
    }
}

export default Contact
