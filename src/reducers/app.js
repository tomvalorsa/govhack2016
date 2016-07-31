import { TOGGLE_MODAL, SET_TAB } from 'actionTypes'

const initialState = {
  modalIsOpen: false,
  tab: '1'
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }
    case SET_TAB:
      return {
        ...state,
        tab: payload
      }
    default:
      return state
  }
}