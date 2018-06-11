import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addTask() {
    let newTask = this.state.inputValue;
    if (newTask === '') {
      return;
    } 
    this.props.submitNewTask(this.state.inputValue);
    this.setState({inputValue: ''});
    return;
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form 
        onSubmit={this.onFormSubmit}
        className="inputSection">
        <input
          className="inputQuestions"
          type="text"
          autoFocus="autoFocus"
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        <button 
          type="submit"
          className="submitButton"
          onClick={() => this.addTask()}>
        >
        </button>
      </form>
    );
  }
}

export default Input;
