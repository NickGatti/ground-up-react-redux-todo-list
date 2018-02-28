import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Todo from './Todo';

class TodoList extends Component {

render() {
    let todoList = this.props.todos.map( todo => {
        return <Todo key={todo.id} todo={todo} />
    })
    return (
        <div>
            {todoList}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(TodoList)