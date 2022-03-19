import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Todos from './todos';
import Addtodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Add some milk' },
      { id: 2, content: 'Play game' },
      { id: 3, content: 'Give me Water' },
      { id: 2, content: 'Save me!' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center-text-blue">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
    );
  }
}
export default App;
