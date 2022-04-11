import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false)
      })
    })
  }

  handleToggle = (id) => {
    
    this.setState({
      ...this.state,
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  handleAdd = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle}/>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.clearCompleted}>Clear</button>
      </div>
    )
  }
}
