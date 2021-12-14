import React from 'react';
import Todos from './Todos';
import 'tachyons'
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos:[
      {id: 1, content: 'get Dano Milk'},
      {id:2, content: 'play Drake musiz'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo=(todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() { 
    return( 
      <div className="App container ">
        <h1 className="center blue-text">Todos's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
      </div>);
  }
}
 
export default App;