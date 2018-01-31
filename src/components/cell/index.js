import React from 'react';
import _ from 'lodash';

const Day = ({date, events, onClick}) => {    
    const handleClick = (e) => onClick(e, date);
    
    const renderLabel = () => date.day > 0 ? <p className="day-label">{date.day}</p> : null;
    
    const renderEvents = () => {
        const {events} = date;
        if(_.isEmpty(events)) {
            return null;
        }

        return events.map(event => <div className="event-item">{event.notes}</div>);
    }

    return (
        <div className={`cell ${date.day < 0 ? 'prevMonth' : '' }`} onClick={handleClick}>
            {renderLabel()}
            {renderEvents()}     
        </div>
    )
}

export default Day;