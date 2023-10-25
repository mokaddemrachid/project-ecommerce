import { combineReducers } from 'redux'
import productReducer from './productReducer'
import userReducer from './userReducer'
import addItems from './addItem'

export default combineReducers({
    productReducer,
    userReducer,
    addItems
})