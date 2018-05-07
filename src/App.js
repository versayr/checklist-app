import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputIsVisible: false,
    };
  }

  renderList(list, listLabel) {
    return (
      <div className="listSection">
        <ul className={ listLabel }>
          {list.map(function(item, index) {
            return <li key={ index }>{item}</li>;
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
          <p>Type task here</p>
          <button 
            className="submitButton"
            onClick={() => this.setState({inputIsVisible: false})}>
            Submit
          </button>
        </div>
    }
    else {
      inputFieldContents =
        <button 
          className="addItem"
          onClick={() => this.setState({inputIsVisible: true})}>
          Add Item
        </button>
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
          <h1 className="App-title">Checklist App</h1>
        </header>
        {this.renderInput()}
        {this.renderList(this.state.todo.slice(), 'todo')}
      </div>
    );
  }
}

export default App;
