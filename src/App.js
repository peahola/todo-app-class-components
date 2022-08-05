import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

export default class App extends React.Component {
  state = {
    todos: []
  }

  addTodo(givenTodoName) {
    const newTodo = {
      id: uuidv4(),
      name: givenTodoName,
      todoCheck: false
    }
    const newList = [...this.state.todos, newTodo]
    this.setState({todos: newList})
  }

  deleteTodo(targetId) {
    const newList = this.state.todos.filter((todo) => targetId !== todo.id)

    this.setState({todos:newList})
  }

  editTodo(todoName, targetId) {
    const newList = this.state.todos.map((todo) => {
      if (targetId === todo.id) {
        return {
          ...todo,
          name: todoName
        }
      }
      return todo
    })
    this.setState({todos: newList})
  }

  toggleTodoDone(targetId) {
    const newList = this.state.todos.map((todo) => {
      if (targetId === todo.id) {
        return {
          ...todo,
          todoCheck: !todo.todoCheck
        }
      }
      return todo
    })
    this.setState({todos: newList})
  }
  
  render(){
    return (
      <div className="App">
        <TodoInput addTodo={(givenTodoName) => this.addTodo(givenTodoName)}/>
        <TodoList todos={this.state.todos} deleteTodo={(targetIndex) => this.deleteTodo(targetIndex)} 
        editTodo={(todoName,targetIndex) => this.editTodo(todoName, targetIndex)} toggleTodoDone={(targetId) => this.toggleTodoDone(targetId)}/>
      </div>
    );
  }
}
