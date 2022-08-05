import React from "react";

export default class Todo extends React.Component {
    state = {
        inEditMode: false,
        todoName: this.props.todo.name
    }
    inputHandler(e) {
        this.setState({ todoName: e.target.value })
    }
    saveEditButton() {
        if (this.state.todoName === "") {
            alert("Cant save empty todo")
            return;
        }

        this.props.editTodo(this.state.todoName, this.props.todo.id)
        this.setState({ inEditMode: false })
    }
    render() {
        if (this.state.inEditMode) {
            return (
                <>
                    <input value={this.state.todoName} onChange={(e) => this.inputHandler(e)} />
                    <button onClick={() => this.saveEditButton()}>Save edit</button>
                </>
            )
        }
        return (
            <li>
                <input type='checkbox' onChange={() => this.props.toggleTodoDone(this.props.todo.id)} checked={this.props.todo.todoCheck} />
                <span style={this.props.todo.todoCheck ? { textDecoration: 'line-through' } : {}}>{this.props.todo.name}</span>
                <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
                <button onClick={() => this.setState({ inEditMode: !this.state.inEditMode })}>Edit todo</button>
            </li>
        )
    }
}
