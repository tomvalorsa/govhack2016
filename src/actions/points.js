import d3 from 'd3'
import { LOADING_POINTS, LOADED_POINTS } from 'actionTypes'

let designDataPath = require('../../data/designs.json')
let patentDataPath = require('../../data/patents.json')

export const loadPoints = (year) => (dispatch, getState) => {
  let { loading, loaded } = getState().points
  if (!loading && !loaded) {
    dispatch({
      type: LOADING_POINTS,
      payload: 2
    })
    
    d3.json(designDataPath, data => {
      dispatch({
        type: LOADED_POINTS,
        payload: { designs: data.features.slice(0, 100) }
      })
    })

    d3.json(patentDataPath, data => {
      dispatch({
        type: LOADED_POINTS,
        payload: { patents: data.features.slice(0, 100) }
      })
    })
  }
}
