import { createStore, combineReducers } from 'redux';
import appReducer from './app';
import calendarReducer from './calendar';
import eventsReducer from './events';


const store = combineReducers({
    app: appReducer,
    calendar: calendarReducer,
    events: eventsReducer
})

export default createStore(
    store,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
