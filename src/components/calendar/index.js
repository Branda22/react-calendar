import React, {Component} from 'react';
import style from './style.scss';
class Calendar extends Component {
    constructor(props) {
        super(props)
    }

    renderHeader() {

    }

    renderDayCells() {
        const {DayCell, data} = this.props;
        if(!DayCell || !data) {
            return null;
        }

        return data.map(d => <DayCell/>)
    }

    render() {
        const days = this.renderDayCells()
        return (
            <div className={style.root}>{days}</div>
        )
    }
}

export default Calendar;