import React, { Component } from 'react'
import './App.css'
import data from './datos/data.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

class App extends Component {

  state = {
    tasks: data
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTask })
  }

  checkDone = (id) => {
    const changeDoneTask = this.state.tasks.map((task) => {
      return task.id === id ? task.done = !task.done : task
    })
    console.log(changeDoneTask)
    this.setState({ ...this.state.tasks, changeDoneTask })

  }

  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tasks.length
    }
    // console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    const { state: { tasks } } = this
    return (
      <div>
        <TaskForm addTask={this.addTask} />

        <Tasks
          tasks={tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />

        <Posts />
      </div>
    )
  }
}

export default App;

