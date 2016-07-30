import { combineReducers } from 'redux'

import app from './app'
import year from './year'
import sa3s from './sa3s'

export default combineReducers({
  app,
  year,
  sa3s
})