import React, {Component} from 'react';
import uuid from 'uuid/v4';
class Calendar extends Component {
    constructor(props) {
        super(props)
    }

    renderHeader() {
        const {daysOfTheWeek} = this.props.calendar;
        if(!daysOfTheWeek) return null;
        const headerDays = daysOfTheWeek.map(day => <div key={uuid()} className="headerCell">{day}</div>)
        return (
            <div className="header">
                {headerDays}
            </div>
        )
    }

    renderDayCells() {
        const { DayCell, data, onDateClick, onEventClick} = this.props;
        if(!DayCell || !data) {
            return null;
        }
        const dayCells = data.map(d => <DayCell key={uuid()} date={d} onClick={onDateClick} onEventClick={onEventClick}/>)

        return (
            <div className="body">
                {dayCells}
            </div>
        );
    }

    render() {
        const header = this.renderHeader()
        const days = this.renderDayCells()
        return (
            <div className="calendar">
                {header}
                {days}
            </div>
        )
    }
}

export default Calendar;