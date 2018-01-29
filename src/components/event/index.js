import React, { Component } from 'react';
import bulma from 'bulma/bulma.sass';
import TimePicker from '../timepicker';
import style from './style.scss';

class Event extends Component {
  constructor() {
    super()

    this.state = {
      startTime: '',
      endTime: '',
      notes: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleTimeChange(e) {
    console.log(e.name, e.value)
    this.setState({
      [e.name]: e.value
    })
  }


  handleSubmit() {
    console.log(this.state)
  }

  render() {
    const {open} = this.props
    if (!open) {
      return null
    }

    const {
      startTime,
      endTime,
      notes
    } = this.state;

    return (
      <div className={style.root}>
        <div className={style.modalBody}>
          <div className={bulma.field}>
            <label className={bulma.label}>Start Time</label>
            <div className={bulma.control}>
              {/* <input name="startTime" value={startTime} className={bulma.input} type="datetime-local" onChange={this.handleChange} /> */}
              <TimePicker name="startTime" onChange={this.handleTimeChange} />
            </div>
          </div>
          <div className={bulma.field}>
            <label className={bulma.label}>End Time</label>
            <div className={bulma.control}>
              {/* <input name="endTime" value={endTime} className={bulma.input} type="datetime-local" onChange={this.handleChange} /> */}
              <TimePicker name="endTime" onChange={this.handleTimeChange}/>         
            </div>
          </div>
          <div className={bulma.field}>
            <label className={bulma.label}>Notes</label>
            <div className={bulma.control}>
              <input name="notes" value={notes} className={bulma.input} type="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className={bulma.field}>
            <div className={bulma.control}>
              <button className={bulma.button + ' ' + bulma['is-primary']} onClick={this.handleSubmit}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;