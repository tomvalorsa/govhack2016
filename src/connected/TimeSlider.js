import TimeSlider from '../components/TimeSlider'
import { connect } from 'react-redux'
import { setYear, setPlaying, incrementYear } from 'actions/timeline'

export default connect(state => {
  return {
    year: state.timeline.year,
    playing: state.timeline.playing
  }
}, {change: setYear, setPlaying, incrementYear})(TimeSlider)