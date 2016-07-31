import Canvas from '../components/Canvas'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    sa3s: state.sa3s,
    points: state.points
  }
})(Canvas)