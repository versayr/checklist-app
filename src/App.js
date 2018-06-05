import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
// import TaskItem from './components/task_item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.submitTask = this.submitTask.bind(this);
  }

  renderList(list, listLabel) {
    return (
      <ul className={ listLabel }>
        {list.map(function(item, index) {
          return (
            <li key={ index } className="taskListing" onClick={() => function() { var newList = this.state.todo.splice(index) }}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }

  submitTask(task) {
    this.setState({todo: this.state.todo.concat(task)});
    return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">check.ly</h1>
        </header>
        <div className="listSection">
          <Input submitTask={this.submitTask} />
          {this.renderList(this.state.todo.slice(), 'todo')}
        </div>
      </div>
    );
  }
}

export default App;
