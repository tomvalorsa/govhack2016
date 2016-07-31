import React, { Component } from 'react'
import styles from './index.css'
import Canvas from '../Canvas'
import TimeSlider from '../TimeSlider'
import Legend from '../Legend'

import { connect } from 'react-redux'
import { loadSA3s } from 'actions/sa3s'
import { loadPoints } from 'actions/points'

class StateContent extends Component {
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
      </div>
    )
  }
}

export default connect(state => {
  return {
    dataLoaded: state.sa3s.loaded && state.points.loaded, 
  }
}, {loadSA3s, loadPoints})(StateContent)