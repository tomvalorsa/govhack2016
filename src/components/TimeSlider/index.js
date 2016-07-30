import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'
import { yearRange } from 'reducers/year'

export default class TimeSlider extends Component {
  static defaultProps = {
    year: 2016,
    change: (val) => console.log(val)
  }
  componentDidMount() {
    this.setSliderBackground()
  }
  onChange = (e) => {
    this.setSliderBackground()
    this.props.change(e.target.value)
  }
  setSliderBackground() {
    let { slider } = this.refs
    let { min, max, value } = slider
    slider.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`
  }
  render() {
    let { change, year } = this.props
    let [ min, max ] = yearRange

    return (
      <div className={styles.container}>
        <input
          ref="slider"
          className={cssUtil.centred}
          type="range"
          min={min}
          max={max}
          defaultValue={1960}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
