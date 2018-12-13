import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';
const TodoList = (props) => {
    return (
        <div className='TodoListWrapper'>
            <TodoItem items={props.items} />
        </div>
    )
}
export default TodoList;
