import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item !== '') {
      const newItem = {
        id: Date.now(),
        name: this.state.item
      };
      this.setState((prevState) => ({
        list: [...prevState.list, newItem],
        item: ''
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;