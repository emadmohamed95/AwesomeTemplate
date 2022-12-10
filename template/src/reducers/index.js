import { combineReducers } from 'redux'
import authReducer from './authSlice'
import snackbarReducer from './snackbarSlice'


export default combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer
  })