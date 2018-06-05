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
          <div
            className="addItem"
            onClick={() => this.setState({inputIsActive: true})}>
            <span>Add Item</span>
          </div>
        </div>
      );
    }

    return (
      <form 
        onSubmit={this.onFormSubmit}
        className="inputSection">
        <div className="inputPrompt">
          <div className="inputQuestions">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange} />
          </div>
          <span 
            className="submitButton"
            onClick={() => this.addTask()}>
            <button type="submit">Submit</button>
          </span>
        </div>
      </form>
    );
  }
}

export default Input;
