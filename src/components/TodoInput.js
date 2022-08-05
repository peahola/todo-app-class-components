import React from "react";

export default class TodoInput extends React.Component {
    state={
        todoName: ''
    }
    inputHandler(e) {
        this.setState({todoName: e.target.value})
    }
    addTodoButton(e) {
        if (this.state.todoName === '') {
            return
        }
        
        if (e.key === "Enter") {
            this.props.addTodo(this.state.todoName)
            this.setState({todoName: ''}) 
        }
    }
    render() {
        return(
            <>
            <input value={this.state.todoName} onChange={(e) => this.inputHandler(e)} onKeyDown={(e) => this.addTodoButton(e)}/>
            </>
        )
    }
}