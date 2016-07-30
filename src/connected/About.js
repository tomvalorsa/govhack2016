import About from '../components/About'
import { connect } from 'react-redux'
import { toggleModal } from 'actions/app'

export default connect(state => {
  return {
    modalIsOpen: state.app.modalIsOpen
  }
}, {toggle: toggleModal})(About)