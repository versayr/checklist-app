import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputIsActive: false,
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addTask() {
    let newTask = this.state.inputValue;
    if (newTask === '') {
      return;
    } 
    this.setState({inputValue: ''});
    this.setState({inputIsActive: false});
    this.props.submitNewTask(this.state.inputValue);
    return;
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    if (!this.state.inputIsActive) {
      return (
        <form className="inputSection">
          <button
            type="submit"
            className="submitButton"
            onClick={() => this.setState({inputIsActive: true})}>
            Add Item
          </button>
        </form>
      );
    }

    return (
      <form 
        onSubmit={this.onFormSubmit}
        className="inputSection">
        <input
          className="inputQuestions"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        <button 
          type="submit"
          className="submitButton"
          onClick={() => this.addTask()}>
          Submit
        </button>
      </form>
    );
  }
}

export default Input;
