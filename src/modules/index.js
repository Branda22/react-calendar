import { createStore, combineReducers } from 'redux';
import calendarReducer from './calendar';


const store = combineReducers({
    calendar: calendarReducer
})

export default createStore(store)
