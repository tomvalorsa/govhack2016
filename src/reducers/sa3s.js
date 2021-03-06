import { LOADING_SA3S, LOADED_SA3S } from 'actionTypes'
import topojson from 'topojson'


const initialState = {
  loading: false,
  loaded: false,
  data: []
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case LOADING_SA3S:
      return {
        ...state,
        loading: true
      }
    case LOADED_SA3S:
      return {
        ...state,
        loaded: true,
        data: topojson.feature(payload, payload.objects['SA3Data']).features
      }
    default:
      return state
  }
}