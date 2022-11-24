import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Nothing happened yet'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return ''
    }
  },
})

export const { addNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer


let timeOutID
export const setNotification = (text, period) => {
  return async dispatch  => {
    dispatch(addNotification(text))
    if (typeof timeOutID === 'number') {
      clearTimeout(timeOutID)
    }
    timeOutID = setTimeout(() => { 
      dispatch(clearNotification()) 
      timeOutID = undefined
    }, period * 1000)
  }
}