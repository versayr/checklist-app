import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import TaskList from './components/task_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.submitNewTask = this.submitNewTask.bind(this);
    this.markCompletedTask = this.markCompletedTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  submitNewTask(task) {
    this.setState({todo: this.state.todo.concat(task)});
    return;
  }

  markCompletedTask(task) {
    return;
  }

  removeTask(taskIndex) {
    let taskList = this.state.todo.slice();
    taskList.splice(taskIndex, 1);
    this.setState({todo: taskList});
    return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">check.ly</h1>
        </header>
        <div className="listSection">
          <Input submitNewTask={this.submitNewTask} />
          <TaskList 
            list={this.state.todo} 
            removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;
