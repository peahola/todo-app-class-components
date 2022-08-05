import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    render() {
        const newList = this.props.todos.map((todo, index) => <Todo todo={todo} deleteTodo={this.props.deleteTodo} index={index} 
        editTodo={this.props.editTodo} toggleTodoDone={this.props.toggleTodoDone} />)
        return(
            <ul>
                {newList}
            </ul>
        )
    }
}