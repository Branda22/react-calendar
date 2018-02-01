import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from '../components/calendar';
import Event from '../components/event';
import Cell from '../components/cell';
import { openEventModal, closeEventModal } from '../modules/app';
import { createEvent, updateEvent, mapEventsToDays, deleteEvent } from '../modules/events';
import { selectDate } from '../modules/calendar';

import {daysOfTheWeek} from '../constants';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {selectedEvent: null}
        
        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventDelete = this.handleEventDelete.bind(this);
    }

    resetState() {
        this.setState({selectedState: null})
    }

    handleEventClick(e, date, event) {
        const {setCurrentDate, openEventModal} = this.props;
        this.setState({
            selectedEvent: event
        }, () => {
            setCurrentDate(date)
            openEventModal(date, event)
        })
    }

    handleDateClick(e, date) {
        const {setCurrentDate, openEventModal} = this.props;
        setCurrentDate(date);
        openEventModal(date);
    }

    handleEventSubmit(event) {
        this.resetState();
        if(event.id) {
            this.props.updateEvent(event);
        } else {
            this.props.createEvent(event);
        }
    }

    handleEventDelete(eventId) {
        this.resetState();
        this.props.deleteEvent(eventId)
    }

    handleModalClose() {
        this.resetState();
        this.props.closeEventModal();
    }

    render() {
        const {app, calendar} = this.props;
        const {selectedDate} = calendar;
        const {days, monthName} = calendar.selectedMonthData;
        return (
            <div className="app">
                <h2 className="appTitle">{monthName}</h2>
                <Calendar DayCell={Cell} data={days} calendar={calendar} onDateClick={this.handleDateClick} onEventClick={this.handleEventClick} />
                <Event event={this.state.selectedEvent} open={app.eventModalIsOpen} selectedDate={selectedDate} onEventSubmit={this.handleEventSubmit} onEventDelete={this.handleEventDelete} onClose={this.handleModalClose} />
            </div>
        )
    }
}

function mapStateToProps({app, calendar, events}) {
    return {
        app,
        calendar : {
            ...calendar,
            selectedMonthData: {
                ...calendar.selectedMonthData,
                days: mapEventsToDays(calendar.selectedMonthData.days, events)
            }
        },
        events
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openEventModal() {
            dispatch(openEventModal())
        },
        closeEventModal() {
            dispatch(closeEventModal())
        },
        createEvent(event) {
            dispatch(createEvent(event))
        },
        updateEvent(event) {
            dispatch(updateEvent(event))
        },
        deleteEvent(eventId) {
            dispatch(deleteEvent(eventId))
        },
        setCurrentDate(date) {
            dispatch(selectDate(date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);