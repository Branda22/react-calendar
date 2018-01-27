import moment from 'moment';
import _ from 'lodash';

export function prepareDataForMonth() {
    const currentMonth = moment().format('M')
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const firstDayOffset = calculateOffSet(firstDayOfMonth)
    const offsetDays = _.range(firstDayOffset).map(n => -1)
    const daysInMonth = _.range(1,moment().daysInMonth()+1)
    const days = [
        ...offsetDays,
        ...daysInMonth
    ];

    const obj = {
        monthName: moment().format('MMMM'),
        firstDayOfMonth,
        firstDayOffset,
        days
    };
    console.log(obj);
    return obj;
}

function getFirstDayOfMonth(){
    return moment().startOf('month').day()
}

function calculateOffSet(firstDayOfMonth){
    return 7 - (7 - firstDayOfMonth)
}