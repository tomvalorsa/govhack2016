import { combineReducers } from 'redux'

import app from './app'
import year from './year'
import datasets from './datasets'

export default combineReducers({
  app,
  year,
  datasets
})