import React, { Component } from 'react'
import './css/main.scss'
import 'flexboxgrid/dist/flexboxgrid.min.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="bg-header flex justify-content-center align-items-center">
          <span>Maxime LAINÉ</span>
          <span>Développeur full stack</span>
        </div>
      </div>
    )
  }
}

export default App
