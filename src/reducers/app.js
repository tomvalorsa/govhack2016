import { TOGGLE_MODAL } from 'actionTypes'

const initialState = {
  modalIsOpen: false
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }
    default:
      return state
  }
}