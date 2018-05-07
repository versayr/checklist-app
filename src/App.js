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
      inputIsVisible: false,
      inputValue: "",
    };
  }

  renderList(list, listLabel) {
    return (
      <div className="listSection">
        {this.renderInput()}
        <ul className={ listLabel }>
          {list.map(function(item, index) {
            return <li key={ index } className="taskListing">{item}</li>;
          })}
        </ul>
      </div>
    )
  }

  renderInput() {
    var inputFieldContents;
    if(this.state.inputIsVisible === true) {
      inputFieldContents = 
        <div className="inputPrompt">
          <div className="inputQuestions">
            <span>Type task here</span>
          </div>
          <div 
            className="submitButton"
            onClick={() => this.setState({inputIsVisible: false})}>
            <span>Submit</span>
          </div>
        </div>
    }
    else {
      inputFieldContents =
        <div
          className="addItem"
          onClick={() => this.setState({inputIsVisible: true})}>
          <span>Add Item</span>
        </div>
    }
    return (
      <div className="inputSection">
        {inputFieldContents}
      </div>
    );
  }

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
