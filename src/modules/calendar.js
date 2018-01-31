import moment from 'moment';
import {prepareDataForMonth} from '../util/calendar'
//Initial state
const initialState = {
    selectedMonthData: prepareDataForMonth(),
    currentDay: moment().format('D'),
    daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    selectedDate: null
}

//Actions
const SELECT_DATE = 'calendar/SELECT_DATE'

//Action creators
export function selectDate(date) {
    return {
        type: SELECT_DATE,
        date
    }
}
//Selectors

//Reducer
export default function calendarReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_DATE:
            return {
                ...state,
                selectedDate: action.date
            }
    
        default:
            return state;
    }
}



