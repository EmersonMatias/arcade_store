import {combineReducers} from "redux"


import cartReducer from "./cart/reducer"
import testReducer from './test/recuder'

const rootReducer = combineReducers({
    cartReducer,
    testReducer
})


export default rootReducer