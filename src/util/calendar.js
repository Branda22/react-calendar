import moment from 'moment';
import _ from 'lodash';

export function prepareDataForMonth() {
    const currentMonth = moment().format('MM')
    const currentYear = moment().format('YYYY')
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const firstDayOffset = calculateOffSet(firstDayOfMonth)
    const offsetDays = _.range(firstDayOffset).map(n => -1)
    const daysInMonth = _.range(1,moment().daysInMonth()+1).map(day => {
        return {
            day, 
            month: currentMonth,
            year: currentYear
        }
    })

    const days = [
        ...offsetDays,
        ...daysInMonth
    ];

    return {
        monthName: moment().format('MMMM'),
        currentMonth,
        currentYear,
        firstDayOfMonth,
        firstDayOffset,
        days
    };
}

function getFirstDayOfMonth(){
    return moment().startOf('month').day()
}

function calculateOffSet(firstDayOfMonth){
    return 7 - (7 - firstDayOfMonth)
}