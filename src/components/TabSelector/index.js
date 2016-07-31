import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'

export default class TabSelector extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Tab name="1" />
        <Tab name="2" />
        <Tab name="3" />
      </div>
    )
  }
}

const Tab = ({name}) => (
  <div className={styles.tab}>
    <div className={cssUtil.centred}>{name}</div>
  </div>
)



