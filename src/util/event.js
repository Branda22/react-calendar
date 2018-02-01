import moment from 'moment';
export const TIME_FORMAT = 'hh:mma';

export function formatTime(h, m, amPm) {
    return `${h}:${formatMinute(m)}${amPm}`;
}

export function formatMinute(m) {
    m = m.toString();
    return m.length == 1 ? 0 + m : m;
}

export function parseTime(time) {
    const [hour, rest] = time.split(':');
    return {
        hour,
        minute: rest.slice(0,2),
        amPm: rest.slice(-2)
    };
}

export function checkForConflict(newEvent, events=[]) {
    const newEventStartTime = moment(newEvent.startTime, TIME_FORMAT)
    const newEventEndTime = moment(newEvent.endTime, TIME_FORMAT)

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const startTime = moment(event.startTime, TIME_FORMAT)
        const endTime = moment(event.endTime, TIME_FORMAT)

        if(newEventStartTime.isBetween(startTime, endTime) || newEventEndTime.isBetween(startTime, endTime)) {
            return true;
        }
    }

    return false;
}