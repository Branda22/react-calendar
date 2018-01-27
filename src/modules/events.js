import uuid from 'uuid/v4'

const initialState = {
    events: []
}

//Actions
const CREATE_EVENT = 'event/CREATE_EVENT';
const DELETE_EVENT = 'event/DELETE_EVENT';
const UPDATE_EVENT = 'event/UPDATE_EVENT';

//Action creators
function createEvent(event) {
    return {
        action: CREATE_EVENT,
        event : {
            id: uuid(),
            ...event
        }
    }
}

function deleteEvent() {}
function updateEvent() {}

//Reducer
export default function eventsReducer(state = initialState, action) {
    switch(action) {
        case CREATE_EVENT:
            return {state}
    }
}