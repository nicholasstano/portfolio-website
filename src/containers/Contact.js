import React, { Component } from 'react'
var gmail = require('../images/gmail.png');
var linkedin = require('../images/linkedin.png');
var github = require('../images/github.png');

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h2 className="contact-header">Contact</h2>
                <p><a href="mailto:nicholasstano@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} className="contact-images" alt="gmail" /></a></p>
                <p><a href="https://github.com/nicholasstano" target="_blank" rel="noopener noreferrer"><img src={github} className="contact-images" alt="github" /></a></p>
                <p><a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="contact-images" alt="linkedin" /></a></p>
                <h2><a href="https://docs.google.com/presentation/d/1ZLDseGwmmNtkrRJYVNR4QPti_NFllnYx43MYu8Eoet0/edit?usp=sharing2" target="_blank" rel="noopener noreferrer">Resume</a></h2>
            </div>
        )
    }
}

export default Contact