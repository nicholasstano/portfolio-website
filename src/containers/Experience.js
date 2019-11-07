import React, { Component } from 'react'
var mountsaintvincent = require('../images/mountsaintvincent.jpg');
var westconn = require('../images/westconn.png');
var bronxprep = require('../images/bronxprep.png');
var uncommon = require('../images/uncommon.png');

export class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <h2 className="experience-header">Experience</h2>
                <p>I graduated from college in 2009 with a Bachelors in Mathematics and a concentration in education.  I began working on my Master's Degree in Mathematics in 2009 and finished my degree while I was teaching in Brooklyn.</p>
                <div className="colleges"><img src={mountsaintvincent} alt="mountsaintvincent logo" /><img src={westconn} alt="westconn logo" /></div>
                <p>I spent eight and a half years in New York City working in two different Charter Schools.  Most recently in Brooklyn from August 2013 to June 2019 where my responsibilties included writing Geometry curriculum for eight high schools within the network while teaching about 80 of my own students each year.  I also worked as an advisor to a select group of 15 students and would contact the families with updates on their childs progress every other week.</p>
                <div className="colleges"><img src={bronxprep} alt="bronxprep logo" /><img src={uncommon} alt="uncommon logo" /></div>
            </div>
        )
    }
}

export default Experience