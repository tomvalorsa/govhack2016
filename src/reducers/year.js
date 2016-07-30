import { SET_YEAR } from 'actionTypes'

const initialState = 1906 // up to 2016
export const yearRange = [1906, 2016]

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case SET_YEAR:
      console.log(parseInt(payload))
      return parseInt(payload)
    default:
      return state
  }
}