import React, { Component } from 'react'
var qwcStandings = require('../images/qwcStandings.png');

export class Project extends Component {

    render() {
        return (
            <div className="project">
                <h2 className="project-header">Projects</h2>
                <p className="project-links"><a href="https://www.youtube.com/watch?v=toICymnOIyA&feature=youtu.be" target="_blank" rel="noopener noreferrer">video demo Quidditch World Cup website</a>
                    <a href="https://github.com/nicholasstano/quidditchworldcup-frontend" target="_blank" rel="noopener noreferrer">frontend</a>
                    <a href="https://github.com/nicholasstano/quidditchworldcup-backend" target="_blank" rel="noopener noreferrer">backend</a>
                </p>
                <p>I love sports and created this site and continue to update it to deepen my understanding on how sports websites are built, track data, and receive updates. Currently I am working on implementing a Fantasy Sports user option to create and join leagues.  The image below shows the Playoff Scores along the top and the Regular Season Standings.</p>
                <center><img src={qwcStandings} alt="Quidditch Standings" /></center>
            </div>
        )
    }
}

export default Project
