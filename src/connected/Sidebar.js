import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux'

export default connect(state => ({tab: state.app.tab}))(Sidebar)