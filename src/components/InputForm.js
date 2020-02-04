import React, { Component } from 'react';

export default class InputForm extends Component {
  state = {
    items: {
      _id: '',
      description: '',
      expense: 0,
      date: null
    }
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const { items } = this.state;
    this.setState({
      items: {
        ...items,
        [name]: value,
        _id: new Date().toISOString(),
        // date: new Date().toDateString()
      }
    });
  };

  handleSave = async e => {
    e.preventDefault();
    await this.props.handleSave(this.state.items);
  };

  render() {
    const { description, expense, date } = this.state.items;
    return (
      <div>
        <form onSubmit={this.handleSave} className='form-container'>
        <div className='input-container'>
          <label htmlFor='' for='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='' for='expense'>Amount (in EUR)</label>
          <input
            type='number'
            name='expense'
            id='expense'
            value={expense}
            onChange={this.handleChange}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='' for='date'>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={this.handleChange}
          />
        </div>
          <button type='submit' className='save-button'>Save</button>
        </form>
      </div>
    );
  }
}
