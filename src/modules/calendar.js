import moment from 'moment';

const initialState = {
    currentMonth: moment().month(String),
    currentDay: '',
    daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    data: [...Array(30).keys()]
}

export default function calendarReducer(state = initialState, action) {
    return state;
}

