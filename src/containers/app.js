import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from '../components/calendar';
import Event from '../components/event';
import Cell from '../components/cell';
import { openEventModal, closeEventModal, clearMessage } from '../modules/app';
import { createEvent, updateEvent, mapEventsToDays, deleteEvent } from '../modules/events';
import { selectDate } from '../modules/calendar';

import {daysOfTheWeek} from '../constants';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {selectedEvent: null, renderAlerts: false}
        
        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventDelete = this.handleEventDelete.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.app.messages) {
            this.setState({renderAlerts: true});
        }
        else {
            this.setState({renderAlerts: false})
        }
    }

    resetState() {
        this.setState({selectedEvent: null})
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
        this.resetState()
        const {setCurrentDate, openEventModal} = this.props;
        setCurrentDate(date);
        openEventModal(date);
    }

    handleEventSubmit(event) {
        const { calendar: {selectedDate: {events}}} = this.props;
        if(event.id) {
            this.props.updateEvent(event, events);
        } else {
            this.props.createEvent(event, events);
        }
        this.resetState();
    }

    handleEventDelete(eventId) {
        this.resetState();
        this.props.deleteEvent(eventId)
    }

    handleModalClose() {
        this.resetState();
        this.props.closeEventModal();
    }

    renderAlerts() {
        if(!this.state.renderAlerts) {
            return null;
        }
        const { app } = this.props;
        setTimeout(() => {
            this.setState({renderAlerts: false})
            this.props.clearMessages();
        }, 3000);
        return (
            <div className="alerts notification is-danger">
                {app.messages}
            </div>
        );
    }

    render() {
        const {app, calendar} = this.props;
        const {selectedDate} = calendar;
        const {days, monthName} = calendar.selectedMonthData;
        return (
            <div className="app">
                {this.renderAlerts()}
                <h2 className="appTitle">{monthName}</h2>
                <Calendar DayCell={Cell} data={days} calendar={calendar} onDateClick={this.handleDateClick} onEventClick={this.handleEventClick} />
                <Event event={this.state.selectedEvent} 
                       open={app.eventModalIsOpen} 
                       selectedDate={selectedDate} 
                       onEventSubmit={this.handleEventSubmit} 
                       onEventDelete={this.handleEventDelete} 
                       onClose={this.handleModalClose} />
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
        createEvent(event, events) {
            dispatch(createEvent(event, events))
        },
        updateEvent(event, events) {
            dispatch(updateEvent(event, events))
        },
        deleteEvent(eventId) {
            dispatch(deleteEvent(eventId))
        },
        setCurrentDate(date) {
            dispatch(selectDate(date))
        },
        clearMessages() {
            dispatch(clearMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);