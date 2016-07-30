import { combineReducers } from 'redux'

import app from './app'
import timeline from './timeline'
import sa3s from './sa3s'
import datasets from './datasets'

export default combineReducers({
  app,
  timeline,
  sa3s,
  datasets
})