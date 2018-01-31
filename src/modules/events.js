import uuid from 'uuid/v4'

//Actions
const GET_EVENTS = 'event/GET_EVENTS';
const CREATE_EVENT = 'event/CREATE_EVENT';
const DELETE_EVENT = 'event/DELETE_EVENT';
const UPDATE_EVENT = 'event/UPDATE_EVENT';
const EDIT_EVENT = 'event/EDIT_EVENT';

//Action creators
export function getEvents() {
    return { type: GET_EVENTS }
}
export function createEvent(event) {
    return {
        type: CREATE_EVENT,
        newEvent: {
            id: uuid(),
            ...event
        }
    }
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        eventId
    }
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        event
    }
}

//Selectors 
export function getEventById(events, eventId) {
    return events.find(event => event.id === eventId)
}

//Reducer
export default function eventsReducer(state = [], action) {
    switch(action.type) {
        case CREATE_EVENT:
            return [...state, action.newEvent]
        case DELETE_EVENT:
            const events = _.filter(state, event => event.id !== action.eventId)
            return events;
        case GET_EVENTS:
            return state;
        case EDIT_EVENT:

        default:
            return state;
    }
}