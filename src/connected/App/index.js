import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import { loadSA3s } from 'actions/sa3s'

import Map from '../Map'
import Canvas from '../Canvas'
import TimeSlider from '../TimeSlider'

class App extends Component {
  componentDidMount() {
    this.props.load()
  }
  render() {
    return (
      <div className={styles.container}>
        <Canvas />
        <TimeSlider />
      </div>
    )
  }
}

export default connect(state => ({test: state.app}), {load: loadSA3s})(App)