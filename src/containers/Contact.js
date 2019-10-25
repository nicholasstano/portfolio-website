import React, { Component } from 'react'
var gmail = require('../images/gmail.png');
var linkedin = require('../images/linkedin.png');
var github = require('../images/github.png');

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <p>845-702-3793</p>
                <a href="mailto:nicholasstano@gmail.com"><img src={gmail} className="contact-images" alt="gmail" /></a>
                <a href="https://github.com/nicholasstano"><img src={github} className="contact-images" alt="github" /></a>
                <a href="https://www.linkedin.com/in/nicholas-stano/"><img src={linkedin} className="contact-images" alt="linkedin" /></a>
            </div>
        )
    }
}

export default Contact