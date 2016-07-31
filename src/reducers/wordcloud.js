import { SET_WORDCLOUD_YEAR, SET_WORDCLOUD_TYPE } from 'actionTypes'

const initialState = {
  type: 'Trademarks',
  year: 1900 // will need to set out acceptable range and default year for each type!!
}


// set default to first of range for current/new type
export const yearRanges = {
  'Designs': [1970, 1980, 1990, 2000, 2010],
  'Trademarks': [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
  'Patents': [2000, 2010]
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case SET_WORDCLOUD_YEAR:
      return {
        ...state,
        year: payload
      }
    case SET_WORDCLOUD_TYPE:
      return {
        type: payload,
        year: yearRanges[payload][0]
      }
    default:
      return state
  }
}