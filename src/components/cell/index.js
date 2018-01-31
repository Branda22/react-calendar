import React from 'react';
import classNames from 'classnames'

const Day = ({date, events, onClick}) => {    
    const handleClick = (e) => onClick(e, date);
    
    const renderLabel = () => date.day > 0 ? <p className="day-label">{date.day}</p> : null;
    
    return (
        <div className={`cell ${date.day < 0 ? 'prevMonth' : '' }`} onClick={handleClick}>
            {renderLabel()}        
        </div>
    )
}

export default Day;