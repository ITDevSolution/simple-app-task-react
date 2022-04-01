import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Task extends Component {
    
    styleCompleted(){
        const {task:{done}} = this.props
        return {
            fontSize: '20px',
            color: done ? 'gray' : 'black',
            textDecoration: done ? 'line-through' : 'none'
        }
    }


    render() {
        const {task:{title,description,done,id},deleteTask,checkDone} = this.props
        return (
            <p style={this.styleCompleted()}>
                {title} -
                {description} - 
                {done} - 
                {id}
                <input type="checkbox" onChange={checkDone.bind(this,id)}/>
                <button style={btnDelete} onClick={deleteTask.bind(this,id)}>
                    X
                </button>
                <br/>
            </p>
            
        )
    }
}

Task.propTypes = {
    task : PropTypes.object.isRequired
}

const btnDelete = {
    fontSize : '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task
