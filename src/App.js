import React, { Component } from 'react';
import ApplicationContainer from './containers/ApplicationContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <ApplicationContainer applications={ [] } />
        </div>
      </div>
    );
  }
}

export default App;
