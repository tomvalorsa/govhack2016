import d3 from 'd3'
import { LOADED_SA3S } from 'actionTypes'

let sa3sPath = require('../../data/SA3Data.json')

export const loadSA3s = (year) => (dispatch, getState) => {
  d3.json(sa3sPath, data => {
    dispatch({
      type: LOADED_SA3S,
      payload: data.features
    })
  })
}
