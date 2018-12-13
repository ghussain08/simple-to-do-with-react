import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


class App extends Component {

  state = {
    items: []
  }

  itemAddHandler = (e) => {
    e.preventDefault();
    let els = e.target.elements;
    let newStateItems = [...this.state.items, els[0].value];
    this.setState({ items: newStateItems });
    els[0].value = '';
  }

  render() {
    return (
      <div className="App">

        {/* Header */}
        <Header />

        {/* todo input element */}
        <div className='TodoInput' >
          <form onSubmit={this.itemAddHandler}>
            <input name='item' type='text' required />
          </form>
        </div>

        {/* todo list items */}
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
