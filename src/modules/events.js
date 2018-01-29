import uuid from 'uuid/v4'

//Actions
const CREATE_EVENT = 'event/CREATE_EVENT';
const DELETE_EVENT = 'event/DELETE_EVENT';
const UPDATE_EVENT = 'event/UPDATE_EVENT';

//Action creators
function createEvent(event) {
    return {
        type: CREATE_EVENT,
        id: uuid(),
        event
    }
}

function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        eventId
    }
}

function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        event
    }
}

//Reducer
export default function eventsReducer(state = [], action) {
    switch(action.type) {
        case CREATE_EVENT:
            return [...events, action.event]
        case DELETE_EVENT:
            const events = _.filter(state, event => event.id !== action.eventId)
            return events;
        case EDIT_EVENT:

        default:
            return state;
    }
}