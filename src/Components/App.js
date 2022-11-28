import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Weather from './Weather'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
    <Router>
          <Header />
          <Switch>
            <Route path='/weather'>
              <Weather />  
            </Route> 
            <Route path='/'>
              <Home />
            </Route>
            {/* <Weather /> */}
          </Switch>
    </Router>
    )
  }
}

export default App