import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from '../components/calendar';
import Event from '../components/event';
import Cell from '../components/cell';
import { openEventModal, closeEventModal } from '../modules/app';

import {daysOfTheWeek} from '../constants';

class App extends Component {
    constructor(props) {
        super(props)
        this.handleDateClick = this.handleDateClick.bind(this);
    }

    handleDateClick(e, eventId) {
        console.log(e, eventId)
        this.props.openEventModal();
    }

    handleEventSubmit(event) {

    }

    render() {
        const {app, calendar} = this.props;
        const {days} = calendar.selectedMonthData;
        return (
            <div>
                <Calendar DayCell={Cell} data={days} daysOfTheWeek={calendar.daysOfTheWeek} onDateClick={this.handleDateClick}/>
                <Event open={app.eventModalIsOpen} onEventSubmit={this.handleEventSubmit}/>
            </div>
        )
    }
}

function mapStateToProps({app, calendar}) {
    return {
        app,
        calendar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openEventModal() {
            dispatch(openEventModal())
        },
        closeEventModal() {
            dispatch(closeEventModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);