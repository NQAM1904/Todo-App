import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const { currentItem, items } = this.state;
    const newItem = currentItem;
    // console.log(newItem)
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      // console.log(newItems)
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }

  }
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
      return items;
    });
    this.setState({
      items: items
    })

  }
  deleteItem = (key) => {
    const fileteredItem = this.state.items.filter(item => item.key !== key);
    console.log(fileteredItem);
    this.setState({
      items: fileteredItem
    })
  }
  render() {
    const { currentItem, items } = this.state;
    return (
      <div className="App">
        <header>
          <form id="to-do-from" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
              value={currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem
          items={items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;

