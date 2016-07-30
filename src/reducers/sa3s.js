import { LOADED_SA3S } from 'actionTypes'

const initialState = {}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case LOADED_SA3S:
      console.log("LOADED_SA3S", payload)
      return payload
    default:
      return state
  }
}