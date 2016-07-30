import { LOADING_SA3S, LOADED_SA3S } from 'actionTypes'

const initialState = {
  loading: false,
  loaded: false,
  data: []
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case LOADING_SA3S:
      return {
        ...state,
        loading: true
      }
    case LOADED_SA3S:
      return {
        ...state,
        loaded: true,
        data: payload
      }
    default:
      return state
  }
}