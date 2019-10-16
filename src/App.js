import React, { Component } from 'react'
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'
import About from './containers/About'
import Contact from './containers/Contact'
import NavBar from './containers/NavBar'
import Introduction from './containers/Introduction'
import Experience from './containers/Experience'
import Project from './containers/Project'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main">
          <Introduction />
          <About />
          <Experience />
          <Project />
          <Contact />
        </div>
        <Switch>
          <Route
            path="/about"
            render={() => {
              return (
                <About />
              )
            }} />
          <Route
            path="/contact"
            render={() => {
              return (
                <Contact />
              )
            }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
