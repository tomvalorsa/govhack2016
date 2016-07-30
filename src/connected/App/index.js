import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import Map from '../Map'
import TimeSlider from '../../components/TimeSlider'
import Canvas from '../../components/Canvas'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Canvas />
        <TimeSlider />
      </div>
    )
  }
}

export default connect(state => ({test: state.app}))(App)