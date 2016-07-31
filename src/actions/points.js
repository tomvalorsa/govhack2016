import d3 from 'd3'
import { LOADING_POINTS, LOADED_POINTS } from 'actionTypes'

let designDataPath = require('../../data/design_data_slim.csv')
let patentDataPath = require('../../data/patent_data_slim.csv')

export const loadPoints = (year) => (dispatch, getState) => {
  let { loading, loaded } = getState().points
  if (!loading && !loaded) {
    dispatch({
      type: LOADING_POINTS,
      payload: 2
    })
    
    d3.csv(designDataPath)
      .row(d => d)
      .get((error, designs) => dispatch({
        type: LOADED_POINTS,
        payload: { designs }
      }))

    d3.csv(patentDataPath)
      .row(d => d)
      .get((error, patents) => dispatch({
        type: LOADED_POINTS,
        payload: { patents }
      }))
  }
}
