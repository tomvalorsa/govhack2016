import { TOGGLE_DATASET } from 'actionTypes'

export const toggleDataset = (dataset) => ({
  type: TOGGLE_DATASET,
  payload: dataset
})