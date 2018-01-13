import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ApplicationContainer from './containers/ApplicationContainer'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ApplicationContainer} />

      </div>
    )
  }
}
