import uuid from 'uuid/v4'
import { checkForConflict } from '../util/event';
import { conflictMessage, clearMessage } from './app';

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

export function createEvent(event, dayEvents) {
    console.log('INSIDE CREATE EVENT')
    return dispatch => {
        dispatch(clearMessage())
        if(checkForConflict(event, dayEvents)) {
            dispatch(conflictMessage())
        }
        else {
            dispatch(newEvent(event))
        }
    }
}

export function updateEvent(event, dayEvents) {
    return dispatch => {
        dispatch(clearMessage())
        if(checkForConflict(event, dayEvents)) {
            dispatch(conflictMessage())
        }
        else {
            dispatch(editEvent(event))
        }
    }
}

export function newEvent(event) {
    console.log('inside new event')
    return {
        type: CREATE_EVENT,
        newEvent: {
            ...event,
            id: uuid()
        }
    }
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        eventId
    }
}

export function editEvent(event) {
    return {
        type: UPDATE_EVENT,
        event
    }
}

//Selectors 
export function getEventById(events, eventId) {
    return events.find(event => event.id === eventId)
}

export function mapEventsToDays(days, events) {
    return days.map(date => {
        date.events = events.filter(event => {
            return event.day === date.day &&
                   event.month === date.month &&
                   event.year === date.year;
        });
        return date;
    })
    
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
        case UPDATE_EVENT:
            const restOfEvents = _.filter(state, event => event.id !== action.event.id)
            return [...restOfEvents, action.event]
        default:
            return state;
    }
}