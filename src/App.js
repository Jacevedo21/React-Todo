import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const todo = [
  {
    task: 'Feed Bare',
    id: 1,
    completed: false
  },
  {
    task: 'Feed ichiraku',
    id: 2,
    completed: false
  },
  {
    task: 'Sell Pinto',
    id: 3,
    completed: false
  },
  {
    task: 'Hack the Mainframe',
    id: 4,
    completed: false
  },
  {
    task: 'World Domination',
    id: 5,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todo: todo,
    }
  }
  // design `App` to be the parent component of your application.
  toggleTask = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = task => {
    console.log('inside app component', task)
    const newTask = {
      task: task,
      id: new Date(),
      completed: false
    }

    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  clearTask = () => {
    const clearedArr = [];

    this.setState({
      todo: clearedArr
    })
  }

  // updateList = () => {

  //   if(todo.task === 'clicked'){
  //     return todo.task.strike()
  //   }

  // }
  render() {
    return (
      <div className="App">
        <div className="header">
          {/* <h2>To do list that needs to be completed ASAP!</h2> */}
          <h1 onClick={() => this.setState({})}>To Do List:</h1>
          <TodoForm addTask={this.addTask} 
          clearTask={this.clearTask}
          updateList={this.updateList}
          />
        </div>
        <TodoList
          toggleTask={this.toggleTask}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
