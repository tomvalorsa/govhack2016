import { TOGGLE_DATASET } from 'actionTypes'

const initialState = {
  'Patents': true,
  'Trademarks': true,
  'Designs': true
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case TOGGLE_DATASET:
      return {
        ...state,
        [payload]: !state[payload]
      }
    default:
      return state
  }
}