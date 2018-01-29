import { createStore, combineReducers } from 'redux';
import appReducer from './app';
import calendarReducer from './calendar';


const store = combineReducers({
    app: appReducer,
    calendar: calendarReducer
})

export default createStore(store)
