import React, {Component} from 'react';
import moment from 'moment';
import _ from 'lodash';

import {formatTime, formatMinute, parseTime} from '../../util/event';

class TimePicker extends Component {
  constructor(props) {
    super(props)

    if(props.time) {
      this.state = parseTime(props.time);
    } else {
      this.state = {
        hour: '00',
        minute: '00',
        amPm: 'AM'
      }
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    }, () => {
      const {hour, minute, amPm} = this.state;
      this.props.onChange({name: this.props.name, value: formatTime(hour, minute, amPm)});
    });
  }

  render() {
    const {hour, minute, amPm} = this.state;
    return (
      <div className="time-picker field is-horizontal">
        <div className="select is-small">
          <select name="hour" value={hour} onChange={this.handleChange}>
            {_.range(0, 12).map(n => <option value={n}>{n}</option>)}
          </select>
        </div>
        <div className="select is-small">
          <select name="minute" value={minute} onChange={this.handleChange}>
            {_.range(0, 60).map(n => <option value={n}>{formatMinute(n)}</option>)}
          </select>
        </div>
        <div className="select is-small">
          <select name="amPm" value={amPm} onChange={this.handleChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TimePicker;