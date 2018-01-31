import React, { Component } from 'react';
import TimePicker from '../timepicker';

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
    this.handleCancel = this.handleCancel.bind(this);
  }

  resetState() {
    this.setState({
      startTime: '',
      endTime: '',
      notes: ''
    })
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

  handleCancel() {
    this.resetState()
    this.props.onClose()
  }

  handleSubmit() {
    this.resetState()
    this.props.onEventSubmit({...this.state, ...this.props.selectedDate})
  }

  renderHeader() {
    const {selectedDate: {day, month, year}} = this.props;
    return (
      <div>
        <h3>{`${month}/${day}/${year}`}</h3>
      </div>
    );
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
      <div className="event">
        <div className="modalBody">
          {this.renderHeader()}
          <div className="field">
            <label className="label">Start Time</label>
            <div className="control">
              <TimePicker name="startTime" onChange={this.handleTimeChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">End Time</label>
            <div className="control">
              <TimePicker name="endTime" onChange={this.handleTimeChange}/>         
            </div>
          </div>
          <div className="field">
            <label className="label">Notes</label>
            <div className="control">
              <input name="notes" value={notes} className="input" type="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary is-small" onClick={this.handleSubmit}>Send</button>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary is-small" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;