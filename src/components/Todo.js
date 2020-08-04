import React from 'react'

const Todo = props => {
    
    // handleToggle = e => {
    //     e.preventDefault()
    //     this.props.toggleTask()
    // }

    return (
        <div
        onClick={() => props.toggleTask(props.task.id)}
        className={`task${props.task.completed ? " completed" : ""}`}
        >
            <p>{props.task.task}</p>
            {/* <p>{props.task.completed}</p> */}

        </div>
    )
}
export default Todo