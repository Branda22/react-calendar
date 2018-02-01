import {combineReducers} from 'redux';

const initialState = {
    eventModalIsOpen: false,
    messages: ''
}

const OPEN_EVENT_MODAL = 'app/OPEN_EVENT_MODAL';
const CLOSE_EVENT_MODAL = 'app/CLOSE_EVENT_MODAL';
const NEW_MESSAGE = 'app/NEW_MESSAGE';
const CONFLICT_MESSAGE = 'app/CONFLICT_MESSAGE';
const CLEAR_MESSAGE = 'app/CLEAR_MESSAGE';

export const openEventModal = () => ({type: OPEN_EVENT_MODAL});

export const closeEventModal = () => ({type: CLOSE_EVENT_MODAL});

export const conflictMessage = () => {
    return {
        type: CONFLICT_MESSAGE,
        message: 'An event already exists for in this time period.'
    }
}

export const clearMessage = () => ({type: CLEAR_MESSAGE});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_EVENT_MODAL:
            return {...state, eventModalIsOpen: true};
        case CLOSE_EVENT_MODAL:
            return {...state, eventModalIsOpen: false};
        case CONFLICT_MESSAGE:
            return {...state, message: action.message};
        case CLEAR_MESSAGE:
            return {...state, message: ''};
        default:
            return state;
    }
}

export default appReducer;