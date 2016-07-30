import TimeSlider from '../components/TimeSlider'
import { connect } from 'react-redux'
import { setYear } from 'actions/year'

export default connect(state => {
  return {
    year: state.year
  }
}, {change: setYear})(TimeSlider)