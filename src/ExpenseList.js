import React, { Component } from 'react';

export default class ExpenseList extends Component {
  


  render() {
    console.log('items', this.props.items);

    return (
      <>
        {this.props.items &&
          this.props.items.map(item => {
            return (
              <div>
                <h2>{item.date}</h2>
                <p>Item name: {item.description}</p>
                <p>Expense: EUR {item.expense}</p>
              </div>
            );
          })}
      </>
    );
  }
}
