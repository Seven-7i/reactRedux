import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    editTodoChecked: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos, editTodoChecked, deleteTodo} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} editTodoChecked={editTodoChecked} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
