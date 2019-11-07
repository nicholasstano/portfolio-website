import React, { Component } from 'react'
var flatiron = require('../images/flatiron.png');
var factfun = require('../images/factfun.png');
var dicetomeetyou = require('../images/dicetomeetyou.png');
var hotseathockey = require('../images/hotseathockey.png');

export class About extends Component {
    render() {
        return (
            <div className="about">
                <h2 className="about-header">About Me</h2>
                <p>Hello!  I'm Nick, a Full Stack Developer living in New York City having completed <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron School's</a> Immersive Software Engineering Program in October 2019.
                </p>
                <center><img src={flatiron} alt="flatironschool" /></center>
                <p>How do sites code a snake draft for fantasy sports websites? How are user scores kept when they log on and log off? How do sites show users a list of meetings they have not yet joined? These are a few of the questions I had and answered writing code.</p>
                <div className="flatiron-projects"><img src={factfun} alt="factfun" /> <img src={dicetomeetyou} alt="dicetomeetyou" /> <img src={hotseathockey} alt="hotseathockey" /></div>
            </div>
        )
    }
}

export default About