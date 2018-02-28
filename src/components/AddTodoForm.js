import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../redux/actions'

class AddTodoForm extends Component {
    state = {
        newTodo: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo({
            id: this.state.newId,
            title: this.state.newTodo
        });
    };

    render() {
        return (
        <div>
            <input
            type="text"
            onChange={e => this.setState({ newTodo: e.target.value })}
            />
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newId: state.todos.length + 1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: bindActionCreators(addTodo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)