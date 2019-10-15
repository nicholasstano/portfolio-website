import React, { Component } from 'react'
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'
import About from './containers/About'
import Contact from './containers/Contact'
import NavBar from './containers/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
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
