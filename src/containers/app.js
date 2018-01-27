import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from '../components/calendar';
import Cell from '../components/cell'

import {daysOfTheWeek} from '../constants';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {calendar} = this.props;
        const {days} = calendar.selectedMonthData;
        return (
            <div>
                <Calendar DayCell={Cell} data={days} daysOfTheWeek={calendar.daysOfTheWeek}/>
            </div>
        )
    }
}

function mapStateToProps({calendar}) {
    return {
        calendar
    }
}

export default connect(mapStateToProps)(App);