import React, {Component} from 'react';
class Calendar extends Component {
    constructor(props) {
        super(props)
    }

    renderHeader() {
        const {daysOfTheWeek} = this.props;
        if(!daysOfTheWeek) return null;
        const headerDays = daysOfTheWeek.map(day => <div className="calendar headerCell">{day}</div>)
        return (
            <div className="calendar header">
                {headerDays}
            </div>
        )
    }

    renderDayCells() {
        const {DayCell, data, onDateClick} = this.props;
        if(!DayCell || !data) {
            return null;
        }
        const dayCells = data.map(d => <DayCell day={d} onClick={onDateClick}/>)

        return (
            <div className="calendar body">
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