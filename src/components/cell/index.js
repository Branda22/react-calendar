import React from 'react';
import style from './style.scss';
import classNames from 'classnames'

const Day = ({day, onClick}) => {
    const cls = classNames({
        [style.root]: true,
        [style.prevMonth]: day < 0
    })
    
    const handleClick = (e) =>  onClick(e, day);
    
    const label = day > 0 ? day : ''
    
    return (
        <div className={cls} onClick={handleClick}>{label}</div>
    )
}

export default Day;