import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'
import cls from 'classnames'
import { yearRange } from 'reducers/year'
import { PlayIcon, PauseIcon } from '../Icons'

export default class TimeSlider extends Component {
  static defaultProps = {
    year: 2016,
    change: (val) => console.log(val),
    setPlaying: () => console.log('setting playing state'),
    incrementYear: () => console.log('incrementing year')
  }
  state = {
    intervalId: undefined
  }
  componentDidMount() {
    this.setSliderBackground()
  }
  onChange = (e) => {
    let { change, setPlaying, playing } = this.props
    this.setSliderBackground()
    change(e.target.value)
    if (playing) {
      setPlaying(false)
    }
  }
  componentDidUpdate() {
    let { playing, incrementYear } = this.props

    // If playing is true and we haven't already set an interval, set one
    if (playing && !this.state.intervalId) {
      let id = setInterval(::this.interval, 200)
      this.setState({intervalId: id})
    }

    // If no longer playing but interval is still active, remove it
    if (!playing && this.state.intervalId) {
      window.clearInterval(this.state.intervalId)
      this.setState({intervalId: undefined})
    }
  }
  interval() {
    this.props.incrementYear()
    this.setSliderBackground()
  }
  setSliderBackground() {
    let { slider } = this.refs
    let { min, max, value } = slider
    slider.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`
  }
  render() {
    let { change, year, playing, setPlaying } = this.props
    let [ min, max ] = yearRange

    let iconProps = {
      fill: '#2196F3',
      height: '100%'
    }

    return (
      <div className={styles.container}>
        <div className={cssUtil.centred}>
          <div className={styles.label}>{year}</div>
          <div className={styles.iconContainer} onClick={() => setPlaying(!playing)}>
            {playing ? <PauseIcon {...iconProps} /> : <PlayIcon {...iconProps} />}
          </div>
          <input
            ref="slider"
            type="range"
            min={min}
            max={max}
            value={year}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}
