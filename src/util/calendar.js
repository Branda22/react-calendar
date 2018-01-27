import moment from 'moment';

export function prepareDataForMonth(month) {
    const firstDayOfMonth = moment().month(month).day(1)
}