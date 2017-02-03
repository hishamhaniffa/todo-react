import React from 'react';
import {TodoItem} from './TodoItem'

export const  TodoList = (props) => {

	return (
		<div className="Todo-List">
            <ul>
              {props.todos.map(todo => <TodoItem handleRemove={props.handleRemove} handleToggle={props.handleToggle} key={todo.id} {...todo}/>)}
            </ul>
          </div>
		)
}

TodoList.proptypes = {
	todos: React.PropTypes.array.isRequired
}