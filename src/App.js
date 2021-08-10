import React from 'react';
import './App.css'
import List from './List';
import Input from './Input';

class App extends React.Component {

  state = {
    task: ["wake up early morning", "Do Yoga", "Mantra Meditaiton", "Bathing"],
    inputValue: ""
  }

  deleteButtonHandler = (singleTask) => {
    let currTask = this.state.task
    let currTaskFilter = currTask.filter((element) => {
      return (element !== singleTask)
    })

    this.setState({
      task: currTaskFilter
    })
  }

  onChangeHandler = (value) => {
    this.setState({ inputValue: value })
  }

  onKeyDownHandler = () => {
    this.setState({
      task: [...this.state.task, this.state.inputValue],
      inputValue: ""
    })
  }

  render = () => {
    return (
      <div>
        <Input onChangeHandler={this.onChangeHandler} value={this.state.inputValue} onKeyDownHandler = {this.onKeyDownHandler} />
        <List task={this.state.task} deleteButtonHandler={this.deleteButtonHandler} />

      </div>
    )
  }
}

export default App;
