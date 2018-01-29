import React, {Component} from 'react';
import moment from 'moment';
import _ from 'lodash';

class TimePicker extends Component {
  constructor() {
    super()
    
    this.state = {
      hour: '0',
      minute: '0',
      amPm: 'AM'
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    }, () => {
      this.props.onChange({name: this.props.name, value:this.state})
    });
  }

  render() {
    const {hour, minute, amPm} = this.state;
    return (
      <div className="field is-horizontal">
        <div>
          <select name="hour" value={hour} onChange={this.handleChange}>
            {_.range(0, 11).map(n => <option value={n}>{n}</option>)}
          </select>
        </div>
        <div>
          <select name="minute" value={minute} onChange={this.handleChange}>
            {_.range(0, 59).map(n => <option value={n}>{n}</option>)}
          </select>
        </div>
        <div>
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