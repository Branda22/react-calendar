import {combineReducers} from 'redux';

const initialState = {
    eventModalIsOpen: false
}

const OPEN_EVENT_MODAL = 'app/OPEN_EVENT_MODAL';
const CLOSE_EVENT_MODAL = 'app/CLOSE_EVENT_MODAL';

export const openEventModal = () => ({type: OPEN_EVENT_MODAL});
export const closeEventModal = () => ({type: CLOSE_EVENT_MODAL});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_EVENT_MODAL:
            return {...state, eventModalIsOpen: true};
        case CLOSE_EVENT_MODAL:
            return {...state, eventModalIsOpen: false};
        default:
            return state;
    }
}

export default appReducer;