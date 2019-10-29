import React, { Component } from 'react'
var flatiron = require('../images/flatiron.png');
var factfun = require('../images/factfun.png');
var dicetomeetyou = require('../images/dicetomeetyou.png');
var hotseathockey = require('../images/hotseathockey.png');

export class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About Me</h1>
                <p>Hello!  I'm Nick, a Full Stack Developer living in New York City having completed <a href="https://flatironschool.com/" target="_blank">Flatiron School's</a> Immersive Software Engineering Program in October 2019.
                </p>
                <center><img src={flatiron} alt="flatironschool" /></center>
                <p>During my time I explored how fantasy sports drafts happen, how sports sites keep track of and update their page with results at all points of the day, how meetup applications are created and I made it a goal to create my own projects to understand the how behind this.</p>
                <div className="flatiron-projects"><img src={factfun} alt="factfun" /> <img src={dicetomeetyou} alt="dicetomeetyou" /> <img src={hotseathockey} alt="hotseathockey" /></div>
            </div>
        )
    }
}

export default About