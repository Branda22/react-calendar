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
    }
}