import React, { Component } from 'react';

export default class ExpenseList extends Component {
  render() {
    const dates = this.props.items.map(el => {
      return el.date;
    });
    const uniqueDates = [...new Set(dates)];
    console.log('items', this.props.items);
    console.log('unique date', uniqueDates);

    let totalExpense

    return (
      <>
        {uniqueDates &&
          uniqueDates.map(date => {
            return (
              <div>
                <h1>Date: {date}</h1>
                <div className='item-container'>
                  {this.props.items
                    .filter(allItems => {
                      return allItems.date === date;
                    })
                    .map(item => {
                      return (
                        <div className='each-item'>
                          <p>Item name: {item.description}</p>
                          <p>Expense: EUR {item.expense}</p>
                          <button type="submit" className='save-button' onClick={()=>this.props.deleteItem(item._id)}>Delete</button>
                        </div>
                      );
                    })}
                </div>
                <h3>
                  Total expense: EUR{' '}
                  {
                    (totalExpense = this.props.items
                      .filter(allItems => {
                        return allItems.date === date;
                      })
                      .map(item => {
                        return item.expense;
                      })
                      .reduce((a, b) => {
                        return Number(a) + Number(b);
                      }, 0))
                  }
                </h3>
              </div>
            );
          })}
      </>
    );
  }
}
