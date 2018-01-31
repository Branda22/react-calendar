export function formatTime(h, m, amPm) {
    return `${h}:${formatMinute(m)}${amPm}`;
}

export function formatMinute(m) {
    m = m.toString();
    return m.length == 1 ? 0 + m : m;
}