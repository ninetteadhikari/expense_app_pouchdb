import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import DB from './db';
import ExpenseList from './components/ExpenseList';

class App extends Component {
  db = new DB();
  state = {
    db: new DB(),
    items: [],
    loading: true
  };

  componentDidMount() {
    this.state.db
      .getAllToDos()
      .then(response => {
        this.setState({
          items: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Handles data once the 'submit' button is pressed or form submitted
  handleSave = async item => {
    await this.state.db.createNewItem(item);

    if (!this.state.items) {
      let items = [].concat(item);
      this.setState({
        items
      });
    } else {
      this.setState({
        items: [item, ...this.state.items]
      });
    }
  };

  // Deletes an item from database and the state
  deleteItem = async id => {
    const deletedItem = this.state.items.filter(el => {
      return el._id === id;
    });
    const filteredItem = this.state.items.filter(el => {
      return el._id !== id;
    });
    await this.state.db.deleteItem(deletedItem[0]);
    this.setState({
      items: filteredItem
    });
  };

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Daily expense list</h1>
          <InputForm handleSave={this.handleSave} />
          <ExpenseList items={this.state.items} deleteItem={this.deleteItem} />
        </header>
      </div>
    );
  }
}

export default App;
