import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
// import TaskItem from './components/task_item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        'Call Stacy',
        'Buy A New Watermelon',
      ],
    };
  }

  renderList(list, listLabel) {
    return (
      <div className="listSection">
        <Input />
        <ul className={ listLabel }>
          {list.map(function(item, index) {
            return (
              <li key={ index } className="taskListing" onClick={() => function() { var newList = this.state.todo.splice(index) }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }

  addTask() {
    var newTask = this.state.inputValue;
    if (newTask === "") {
      return;
    }
    else {
      this.setState({todo: this.state.todo.concat(newTask)})
      this.setState({inputValue: ""})
      this.setState({inputIsActive: false})
      return;
    }
  };

  removeTask(taskList, taskIndex) { 
    return;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">check.ly</h1>
        </header>
        {this.renderList(this.state.todo.slice(), 'todo')}
      </div>
    );
  }
}

export default App;
