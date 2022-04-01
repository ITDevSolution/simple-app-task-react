import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

class Tasks extends Component {

    render() {
        const { tasks,deleteTask, checkDone } = this.props
        return (
            tasks.map(task =>
                <Task
                    task={task}
                    key={task.id}
                    deleteTask={deleteTask}
                    checkDone={checkDone}
                />)
        )
    }
}

// Pedir que la variable array sea requerido.
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}


export default Tasks