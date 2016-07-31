import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import { loadSA3s } from 'actions/sa3s'
import { loadPoints } from 'actions/points'

import Map from '../Map'
import Canvas from '../Canvas'
import TimeSlider from '../TimeSlider'
import Legend from '../Legend'
import About from '../About'

class App extends Component {
  componentDidMount() {
    this.props.loadSA3s()
    this.props.loadPoints()
  }
  render() {
    let { dataLoaded } = this.props
    return (
      <div className={styles.container}>
        { dataLoaded ? <Canvas /> : null }
        <TimeSlider />
        <Legend />
        <About />
      </div>
    )
  }
}

export default connect(state => ({
  dataLoaded: state.sa3s.loaded && state.points.loaded, 
  test: state.app
}), {loadSA3s, loadPoints})(App)