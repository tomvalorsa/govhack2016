import { TOGGLE_MODAL, SET_TAB } from 'actionTypes'

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

export const setTab = (tab) => ({
  type: SET_TAB,
  payload: tab
})