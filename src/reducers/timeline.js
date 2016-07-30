import { SET_YEAR, SET_PLAYING, INCREMENT_YEAR } from 'actionTypes'

const initialState = {
  year: 1960, // 1906 - 2016
  playing: false
}

export const yearRange = [1906, 2016]

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case SET_YEAR:
      return {
        ...state,
        year: parseInt(payload)
      }
    case SET_PLAYING:
      return {
        ...state,
        playing: payload
      }
    case INCREMENT_YEAR:
      return {
        ...state,
        year: state.year + 1
      }
    default:
      return state
  }
}