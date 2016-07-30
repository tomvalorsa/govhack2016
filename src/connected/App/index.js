import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import { loadSA3s } from 'actions/sa3s'

import Map from '../Map'
import Canvas from '../Canvas'
import TimeSlider from '../TimeSlider'
import Legend from '../Legend'

class App extends Component {
  componentDidMount() {
    this.props.load()
  }
  render() {
    let { sa3s } = this.props
    return (
      <div className={styles.container}>
        { sa3s.loaded ? <Canvas /> : null }
        <TimeSlider />
        <Legend />
      </div>
    )
  }
}

export default connect(state => ({sa3s: state.sa3s, test: state.app}), {load: loadSA3s})(App)