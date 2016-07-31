import { SET_WORDCLOUD_YEAR, SET_WORDCLOUD_TYPE } from 'actionTypes'

export const setWordcloudYear = (year) => ({
  type: SET_WORDCLOUD_YEAR,
  payload: year
})

export const setWordcloudType = (type) => ({
  type: SET_WORDCLOUD_TYPE,
  payload: type
})