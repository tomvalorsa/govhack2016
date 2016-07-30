import Legend from '../components/Legend'
import { connect } from 'react-redux'
import { toggleDataset } from 'actions/datasets'

export default connect(state => {
  return {
    datasets: state.datasets
  }
}, {click: toggleDataset})(Legend)
