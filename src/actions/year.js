import { SET_YEAR, SET_PLAYING, INCREMENT_YEAR } from 'actionTypes'

export const setYear = (year) => ({
  type: SET_YEAR,
  payload: year
})

export const setPlaying = (bool) => ({
  type: SET_PLAYING,
  payload: bool
})

export const incrementYear = () => ({
  type: INCREMENT_YEAR
})