import TabSelector from '../components/TabSelector'
import { connect } from 'react-redux'
import { setTab } from 'actions/app'

export default connect(state => {
  return {
    activeTab: state.app.tab
  }
}, {click: setTab})(TabSelector)