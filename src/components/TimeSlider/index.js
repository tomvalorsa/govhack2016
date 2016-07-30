import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'

export default class TimeSlider extends Component {
  static defaultProps = {
    change: (val) => console.log(val)
  }
  onChange = (e) => {
    let { min, max, value } = e.target
    e.target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
    this.props.change(value)
  }
  render() {
    let { change } = this.props

    return (
      <div className={styles.container}>
        <input
          className={cssUtil.centred}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onChange={this.onChange}
        />
      </div>
    )
  }
}
