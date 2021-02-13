import { combineReducers } from 'redux'

import CounterReducer from './counter'
import LoggedReducer from './isLogged'

const AllReducers = combineReducers({
    counter: CounterReducer,
    isLogged: LoggedReducer
})

export default AllReducers