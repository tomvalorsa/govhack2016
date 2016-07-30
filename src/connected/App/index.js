import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import Map from '../Map'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Map />
      </div>
    )
  }
}

export default connect(state => ({test: state.app}))(App)