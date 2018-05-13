import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        'Call Stacy',
        'Buy A New Watermelon',
      ],
      inputIsActive: false,
      inputValue: "",
    };
  }

  renderList(list, listLabel) {
    return (
      <div className="listSection">
        {this.renderInput()}
        <ul className={ listLabel }>
          {list.map(function(item, index) {
            return (
              <li 
                key={ index } 
                className="taskListing"
                onClick={() => alert("remove item index " + index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }

  renderInput() {
    var inputFieldContents;
    if(this.state.inputIsActive === true) {
      inputFieldContents = 
        <div className="inputPrompt">
          <div className="inputQuestions">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </div>
          <div 
            className="submitButton"
            onClick={() => this.addTask()}>
            <span>Submit</span>
          </div>
        </div>
    }
    else {
      inputFieldContents =
        <div
          className="addItem"
          onClick={() => this.setState({inputIsActive: true})}>
          <span>Add Item</span>
        </div>
    }
    return (
      <div className="inputSection">
        {inputFieldContents}
      </div>
    );
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

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
