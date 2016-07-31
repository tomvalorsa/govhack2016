import Canvas from '../components/Canvas'
import { connect } from 'react-redux'

export default connect(state => {
  let points = {}
  Object.keys(state.points.data).forEach(key => {
    points[key] = state.datasets[key] ? state.points.data[key] : []
  })

  return {
    sa3s: state.sa3s,
    points: points
  }
})(Canvas)