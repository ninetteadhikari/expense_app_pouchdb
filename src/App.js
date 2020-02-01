import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm';
import DB from './db';
import ExpenseList from './ExpenseList';

class App extends Component {

  db= new DB()
  state = {
    db: new DB(),
    items: [],
    loading:true
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

  //  async componentDidMount() {
  //   const items = await this.state.db.getAllToDos();
    
  //     this.setState({
  //       items,
  //       loading:false
  //     });
    
  //   console.log('initial state items', items)
  // }

 
  // Handles data once the 'submit' button is pressed or form submitted
  handleSave = async item => {
    await this.state.db.createNewItem(item);

    if (!this.state.items) {
      let items=[].concat(item)
      this.setState({
        items
      });
    } else {
      this.setState({
        items : [item, ...this.state.items]
      })
    }
  };
  
  render() {
    return (
      <div className='App'>
      {console.log('all items',this.state.items)}
        <header>
          <h1>Daily expense list</h1>
          <InputForm handleSave={this.handleSave} />
          <ExpenseList items={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App;
