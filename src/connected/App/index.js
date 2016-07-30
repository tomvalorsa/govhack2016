import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import Map from '../Map'
import Canvas from '../../components/Canvas'
import TimeSlider from '../TimeSlider'

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