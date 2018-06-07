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

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  addTask() {
    let newTask = this.state.inputValue;
    if (newTask === '') {
      return;
    } 
    this.setState({inputValue: ''});
    this.setState({inputIsActive: false});
    this.props.submitTask(this.state.inputValue);
    return;
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    if (!this.state.inputIsActive) {
      return (
        <div className="inputSection">
          <button
            type="submit"
            className="submitButton"
            onClick={() => this.setState({inputIsActive: true})}>
            Add Item
          </button>
        </div>
      );
    }

    return (
      <form 
        onSubmit={this.onFormSubmit}
        className="inputSection">
        <div className="inputPrompt">
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
        </div>
      </form>
    );
  }
}

export default Input;
