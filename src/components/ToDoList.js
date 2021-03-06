import React from 'react';
import ToDo from './ToDo';

const ToDoList = ( { todos, setTodos, filteredTodos }) => {
    
    
    return (
        <div className="todolist-container">
            <ul>
                {filteredTodos.map(todo => (
                    <ToDo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;