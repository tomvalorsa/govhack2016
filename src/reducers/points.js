import { LOADING_POINTS, LOADED_POINTS } from 'actionTypes'

const initialState = {
  loading: false,
  loaded: false,
  datasets: 0,
  data: {}
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case LOADING_POINTS:
      return {
        ...state,
        loading: true,
        datasets: payload
      }
    case LOADED_POINTS:
      return {
        ...state,
        loaded: (Object.keys(state.data).length + 1 >= state.datasets),
        data: {
          ...state.data,
          ...payload
        }
      }
    default:
      return state
  }
}