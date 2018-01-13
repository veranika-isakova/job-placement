
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import muiTheme from './styles/theme'
import Routes from './routes'

class App extends Component {

  render() {
    return (

        <div className="App">
          <Routes />
        </div>

    )
  }
}

export default App
