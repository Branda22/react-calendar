import moment from 'moment';
import {prepareDataForMonth} from '../util/calendar'
//Initial state
const initialState = {
    selectedMonthData: prepareDataForMonth(),
    currentDay: moment().format('D'),
    daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    data: [...Array(30).keys()]
}

//Actions

//Action creators

//Selectors

//Reducer
export default function calendarReducer(state = initialState, action) {
    return state;
}



