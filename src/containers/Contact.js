import React, { Component } from 'react'
var gmail = require('../images/gmail.png');
var linkedin = require('../images/linkedin.png');
var github = require('../images/github.png');

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <p><a href="mailto:nicholasstano@gmail.com" target="_blank"><img src={gmail} className="contact-images" alt="gmail" /></a></p>
                <p><a href="https://github.com/nicholasstano" target="_blank"><img src={github} className="contact-images" alt="github" /></a></p>
                <p><a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank"><img src={linkedin} className="contact-images" alt="linkedin" /></a></p>
                <p>845-702-3793</p>
            </div>
        )
    }
}

export default Contact