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
            </form>
        )
    }
}

export default TodoForm