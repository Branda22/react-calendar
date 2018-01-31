import React from 'react';
import _ from 'lodash';

const Event = ({event, onClick}) => {
    const handleClick = (e) => onClick(e, event);
    return <a id={event.id} className="event-item" onClick={handleClick} >{event.notes}</a>;
}

const Day = ({date, events, onClick, onEventClick}) => {    
    const handleClick = (e) => onClick(e, date);
    const handleEventClick = (e, event) => {
        e.stopPropagation();
        console.log('EVENT CLICK!', e.target.id)
        onEventClick(e, date, event)
    }
    const renderLabel = () => date.day > 0 ? <p className="day-label">{date.day}</p> : null;
    
    const renderEvents = () => {
        const {events} = date;
        if(_.isEmpty(events)) {
            return null;
        }

        return events.map(event => <Event event={event} onClick={handleEventClick} />);
    }

    return (
        <div className={`cell ${date.day < 0 ? 'prevMonth' : '' }`} onClick={handleClick}>
            {renderLabel()}
            {renderEvents()}     
        </div>
    )
}

export default Day;