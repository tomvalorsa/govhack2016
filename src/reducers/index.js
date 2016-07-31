import { combineReducers } from 'redux'

import app from './app'
import timeline from './timeline'
import sa3s from './sa3s'
import points from './points'
import datasets from './datasets'
import wordcloud from './wordcloud'

export default combineReducers({
  app,
  timeline,
  sa3s,
  datasets,
  wordcloud,
  points
})