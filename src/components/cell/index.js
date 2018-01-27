import React from 'react';
import style from './style.scss';
import classNames from 'classnames'

const Day = ({day}) => {
    const cls = classNames({
        [style.root]: true,
        [style.prevMonth]: day < 0
    })
    const label = day > 0 ? day : ''
    return (
        <div className={cls}>{label}</div>
    )
}

export default Day;