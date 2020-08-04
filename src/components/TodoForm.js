import React from "react"

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: "",
        }
    }

    handleChange = e => {
        console.log(e.target.value, 'value')
        this.setState({
            taskText: e.target.value
        });
    };


    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.taskText);
        this.setState({
            taskText: ""
        })
    }

    handleClear = e => {
        e.preventDefault()
        this.props.clearTask()
    }

    // handleClear = e => {
    //     e.preventDefault()
    //     this.props.clearTask(this.state.task);
    //     this.setState
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="taskText"
                    value={this.state.taskText}
                    onChange={this.handleChange}
                />
                <button>Add</button>
                <button className="clear-btn" onClick={this.handleClear} >
                    Clear List
            </button>
            <button className="update-btn">Update list</button>
            </form>
        )
    }
}

export default TodoForm