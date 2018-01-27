import React, {Component} from 'react';
import style from './style.scss';
class Calendar extends Component {
    constructor(props) {
        super(props)
    }

    renderHeader() {
        const {daysOfTheWeek} = this.props;
        if(!daysOfTheWeek) return null;
        return daysOfTheWeek.map(day => <div className={style.header}>{day}</div>)
    }

    renderDayCells() {
        const {DayCell, data} = this.props;
        if(!DayCell || !data) {
            return null;
        }

        return data.map(d => <DayCell/>)
    }

    render() {
        const header = this.renderHeader()
        const days = this.renderDayCells()
        return (
            <div className={style.root}>
                {header}
                {days}
            </div>
        )
    }
}

export default Calendar;