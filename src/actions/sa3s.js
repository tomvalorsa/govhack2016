import d3 from 'd3'
import { LOADING_SA3S, LOADED_SA3S } from 'actionTypes'

let sa3sPath = require('../../data/sa3_data.json')

export const loadSA3s = (year) => (dispatch, getState) => {
  let { loading, loaded } = getState().sa3s
  if (!loading && !loaded) {
    dispatch({
      type: LOADING_SA3S
    })

    d3.json(sa3sPath, data => {
      dispatch({
        type: LOADED_SA3S,
        payload: data.features
      })
    })
  }
}
